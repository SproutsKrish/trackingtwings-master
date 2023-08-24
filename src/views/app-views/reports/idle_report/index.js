import React, { useState } from "react";
import { Table, Button, Card, Select, DatePicker } from "antd";
import Flex from "components/shared-components/Flex";
import { FileExcelOutlined, SearchOutlined } from "@ant-design/icons";
import api from "configs/apiConfig";
import { Excel } from "antd-table-saveas-excel";

const { Option } = Select;
const { RangePicker } = DatePicker;

export const IdleReport = () => {
  const [idleList, setIdleList] = useState([]);
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
      vehicle_id: selectedVehicleId === "All" ? null : selectedVehicleId,
    };

    setIdleList([]); // Clear previous data
    setIsLoading(true);

    try {
      const idle_data = await api.post("get_idle_report", data);
      console.log(idle_data.data);

      if (idle_data.data && Array.isArray(idle_data.data.data)) {
        const processedData = idle_data.data.data.map((item) => ({
          s_no: item.id,
          vehicle_name: item.vehicle_name,
          start_date: item.start_datetime,
          end_date: item.end_datetime,
          location: item.start_latitude + ":" + item.start_longitude,
          duration: item.idle_duration,
        }));

        console.log(processedData);

        setIdleList(processedData);

        console.log("idleList:", idleList);
      } else {
        setIdleList([]); // Clear the list when no data is found
        console.log(
          "Response data is not in the expected format:",
          idle_data.data
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
    {
      title: "Vehicle Name",
      dataIndex: "vehicle_name",
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
    },
    {
      title: "End Date",
      dataIndex: "end_date",
    },

    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Duration",
      dataIndex: "duration",
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
      .addDataSource(idleList, {
        str2Percent: true,
      })
      .saveAs("Excel.xlsx");
  };

  return (
    <>
      <Card title="Idle Report">
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
                name="vehicle_id"
                placeholder="Vehicle"
                onChange={handleVehicleIdChange}
              >
                <Option value="All">All</Option>
                <Option value="1">TN01AB1234</Option>
                <Option value="2">TN02AB9874</Option>
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
          ) : idleList.length > 0 ? (
            <Table bordered columns={tableColumns} dataSource={idleList} />
          ) : (
            <p>No Data Found</p>
          )}
        </div>
      </Card>
    </>
  );
};

export default IdleReport;
