import React, {useState} from 'react'
import {Table,Button,Card,Drawer,Select, Input,Form,DatePicker } from 'antd'
import Flex from 'components/shared-components/Flex'
import { PlusOutlined,FileExcelOutlined,SearchOutlined } from '@ant-design/icons';
import utils from 'utils'
const { Option } = Select
const { RangePicker } = DatePicker;
export const ParkingReport = () => {
  const tableColumns = [
    {
      title: 'S.No',
      dataIndex:'s_no'
    },
    {
        title: 'Vehicle Name',
        dataIndex:'vehicle_name'
    },
    {
        title: 'Start Date',
        dataIndex: 'start_date',
    },
{
        title: 'End Date',
        dataIndex: 'end_date',
    },

    {
        title: 'Location',
        dataIndex: 'location',
    },
    {
        title: 'Map View',
        dataIndex: 'map_view',
    },
]
  const onFinish = values => {
    console.log('Success:', values);
  };
 
  return (
    
    <>
    <Card title="Parking Report">
    <Flex alignItems="center" justifyContent="space-between" mobileFlex={false}>
        <Flex className="mb-1" mobileFlex={false}>
        <div className='mr-md-6 mr-3'>
            <Select showSearch defaultValue="Today" 
							className="w-100" 
							style={{ minWidth: 180 }} >
            <option value="1">Today</option>
            <option value="2">Last 7 Days</option>
            <option value="3">Last Month</option>
            <option value="4">Custom</option>
            </Select>
          </div>
					<div className='mr-md-3 mr-3' >
            <RangePicker showTime />
          </div>
					<div className="mr-md-3 mb-3">
						<Select mode="multiple"
							defaultValue="All" 
							className="w-100" 
							style={{ minWidth: 180 }} 
							
							placeholder="Vehicle"
						>
							<Option value="All">All</Option>
							<Option value="1">TN01AB1234</Option>
							<Option value="2">TN02AB9874</Option>
						</Select>
					</div>
				
          <div className="mb-3">
          <Button type="primary" success icon={<SearchOutlined/>} >Search</Button>
          </div>
          <div className="mb-3">
          <Button type="primary" success icon={<FileExcelOutlined/>} ghost>Export</Button>
          </div>
				</Flex>
                
                
            </Flex>
      <div className="table-responsive">
        <Table bordered columns={tableColumns}>

        </Table>
      </div>
    </Card>
    </>
  )
}

export default ParkingReport