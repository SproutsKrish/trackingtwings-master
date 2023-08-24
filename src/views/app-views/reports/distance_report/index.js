import React, { useState } from "react";
import { Table, Button, Card, Select, DatePicker } from "antd";
import Flex from "components/shared-components/Flex";
import { FileExcelOutlined, SearchOutlined } from "@ant-design/icons";
import api from "configs/apiConfig";
import { Excel } from "antd-table-saveas-excel";

const { Option } = Select;
const { RangePicker } = DatePicker;

export const IdleReport = () => {
  const [distanceList, setDistanceList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState(null);
  const [selectedVehicleId, setSelectedVehicleId] = useState("All");

  const handleDateRangeChange = (dateRange) => {
    setSelectedDateRange(dateRange);
  };

  const handleVehicleIdChange = (vehicleId) => {
    setSelectedVehicleId(vehicleId);
  };

  const handleSearchClick = async () => {
    // Log the actual selected values
    console.log("Selected Date Range:", selectedDateRange);
    if (selectedDateRange) {
      const [startDate, endDate] = selectedDateRange;
      console.log("Start Date:", startDate.format("YYYY-MM-DD"));
      console.log("End Date:", endDate.format("YYYY-MM-DD"));
    }
    console.log("Selected Vehicle ID:", selectedVehicleId);

    const data = {
      start_day: selectedDateRange
        ? selectedDateRange[0].format("YYYY-MM-DD HH:mm:ss")
        : null,
      end_day: selectedDateRange
        ? selectedDateRange[1].format("YYYY-MM-DD HH:mm:ss")
        : null,
      device_imei: selectedVehicleId === "All" ? null : selectedVehicleId,
    };

    setDistanceList([]); // Clear previous data
    setIsLoading(true);

    try {
      const trip_data = await api.post("get_distance_report", data);
      console.log(trip_data.data);

      if (trip_data.data && Array.isArray(trip_data.data.data)) {
        const processedData = trip_data.data.data.map((item) => ({
          s_no: item.id,
          date: item.date,
          start_time: item.start_date,
          start_location: item.start_latitude + ":" + item.start_longitude,
          start_odometer: item.start_odometer,
          end_time: item.end_date,
          end_location: item.end_latitude + ":" + item.end_longitude,
          end_odometer: item.end_odometer,
          odometer_difference: item.odometer_difference,
        }));

        console.log(processedData);

        setDistanceList(processedData);

        console.log("distanceList:", distanceList);
      } else {
        setDistanceList([]); // Clear the list when no data is found
        console.log(
          "Response data is not in the expected format:",
          trip_data.data
        );
      }
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);

    // Perform additional actions based on the selected values
  };

  const tableColumns = [
    {
      title: "S.No",
      dataIndex: "s_no",
    },
    // {
    //   title: "Vehicle Name",
    //   dataIndex: "vehicle_name",
    // },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Start Time",
      dataIndex: "start_time",
    },
    {
      title: "Start Location",
      dataIndex: "start_location",
    },
    {
      title: "Start Odometer",
      dataIndex: "start_odometer",
    },
    {
      title: "End Time",
      dataIndex: "end_time",
    },
    {
      title: "End Time",
      dataIndex: "end_location",
    },
    {
      title: "End Odometer",
      dataIndex: "end_odometer",
    },
    {
      title: "Distance (KM)",
      dataIndex: "odometer_difference",
    },
    {
      title: "Map View",
      dataIndex: "map_view",
    },
  ];

  const handleClick = () => {
    const excel = new Excel();
    excel
      .addSheet("test")
      .addColumns(tableColumns)
      .addDataSource(distanceList, {
        str2Percent: true,
      })
      .saveAs("Excel.xlsx");
  };

  return (
    <>
      <Card title="Distance Report">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          mobileFlex={false}
        >
          <Flex className="mb-1" mobileFlex={false}>
            <div className="mr-md-6 mr-3">
              <Select
                showSearch
                defaultValue="Today"
                className="w-100"
                style={{ minWidth: 180 }}
              >
                <option value="1">Today</option>
                <option value="2">Last 7 Days</option>
                <option value="3">Last Month</option>
                <option value="4">Custom</option>
              </Select>
            </div>
            <div className="mr-md-3 mr-3">
              <RangePicker
                showTime
                name="range_picker"
                format={"YYYY-MM-DD"}
                onChange={handleDateRangeChange}
              />
            </div>
            <div className="mr-md-3 mb-3">
              <Select
                defaultValue="All"
                className="w-100"
                style={{ minWidth: 180 }}
                name="device_imei"
                placeholder="Vehicle"
                onChange={handleVehicleIdChange}
              >
                <Option value="All">All</Option>
                <Option value="2109120102295">TN01AB1234</Option>
                <Option value="2109120102294">TN02AB9874</Option>
              </Select>
            </div>

            <div className="mb-3">
              <Button
                type="primary"
                success
                icon={<SearchOutlined />}
                onClick={handleSearchClick}
              >
                Search
              </Button>
            </div>
            <div className="mb-3">
              <Button
                type="primary"
                icon={<FileExcelOutlined />}
                onClick={handleClick}
              >
                Export
              </Button>
            </div>
          </Flex>
        </Flex>
        <div className="table-responsive">
          {isLoading ? (
            <div>Loading...</div> // Display loading indicator
          ) : distanceList.length > 0 ? (
            <Table bordered columns={tableColumns} dataSource={distanceList} />
          ) : (
            <p>No Data Found</p>
          )}
        </div>
      </Card>
    </>
  );
};

export default IdleReport;
