import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Card,
  Drawer,
  Select,
  Input,
  Form,
  DatePicker,
} from "antd";
import Flex from "components/shared-components/Flex";
import {
  PlusOutlined,
  FileExcelOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import utils from "utils";
import { useSelector } from "react-redux";
import api from "configs/apiConfig";
const { Option } = Select;
const { RangePicker } = DatePicker;
export const IdleReport = () => {
  const [vehicles, SetVehicles] = useState({});
  const [idleList, SetIdleList] = useState({});
  const token = useSelector((state) => state.auth);
  console.log(token);
  const handleChange = (values) => {
    console.log(values);
    idle_report(values);
  };
  useEffect(() => {
    idle_report();
  }, []);
  const idle_report = async (values) => {
    const data = {
      start_day: "2023-08-07 00:00:00",
      end_day: "2023-08-18 00:00:00",
      vehicle_id: "1",
    };
    //const idle_data = await api.get("vehicle_count").then(res => { return res}).catch(err => { return err});
    const idle_data = await api
      .post("get_idle_report/", data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    console.log(idle_data);
    SetIdleList(idle_data);
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
      title: "Map View",
      dataIndex: "map_view",
    },
  ];
  const onFinish = (values) => {
    console.log("Success:", values);
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
                onChange={handleChange}
              />
            </div>
            <div className="mr-md-3 mb-3">
              <Select
                defaultValue="All"
                className="w-100"
                style={{ minWidth: 180 }}
                name="vehicle_id"
                placeholder="Vehicle"
                onChange={handleChange}
              >
                <Option value="All">All</Option>
                <Option value="1">TN01AB1234</Option>
                <Option value="2">TN02AB9874</Option>
              </Select>
            </div>

            <div className="mb-3">
              <Button type="primary" success icon={<SearchOutlined />}>
                Search
              </Button>
            </div>
            <div className="mb-3">
              <Button type="primary" success icon={<FileExcelOutlined />} ghost>
                Export
              </Button>
            </div>
          </Flex>
        </Flex>
        <div className="table-responsive">
          <Table bordered columns={tableColumns}></Table>
        </div>
      </Card>
    </>
  );
};

export default IdleReport;
