import React, {useState} from 'react'
import {Table,Button,Card,Drawer,Select, Input,Form,DatePicker} from 'antd'
import Flex from 'components/shared-components/Flex'
import { PlusOutlined,FileExcelOutlined,SearchOutlined } from '@ant-design/icons';
import utils from 'utils'
import GeofenceData from "assets/data/geofence_report_list.json"
const { Option } = Select
const { RangePicker } = DatePicker;
export const GeofenceReport = () => {
    const [list, setList] = useState(GeofenceData)
    const [selectedRows, setSelectedRows] = useState([])
    const [selectedRowKeys, setSelectedRowKeys] = useState([])
	
    const tableColumns = [
        {
            title: 'S.No',
            dataIndex:'id'
        },
        {
            title: 'GeoFence In Time',
            dataIndex: 'geofence_in_time',
        },
		{
            title: 'GeoFence Out Time',
            dataIndex: 'geofence_out_time',
        },
        {
            title: 'Vehicle Name',
            dataIndex: 'vehicle_name',
        },
        {
            title: 'Location',
            dataIndex: 'location',
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
        },
    ]
    const handleShowStatus = value => {
		if(value !== 'All') {
			const key = 'id'
			const data = utils.filterArray(GeofenceData, key, value)
			setList(data)
		} else {
			setList(GeofenceData)
		}
	}
    const onSearch = e => {
		const value = e.currentTarget.value
		const searchArray = e.currentTarget.value? list : GeofenceData
		const data = utils.wildCardSearch(searchArray, value)
		setList(data)
		setSelectedRowKeys([])
	}
    const rowSelection = {
		onChange: (key, rows) => {
			setSelectedRows(rows)
			setSelectedRowKeys(key)
		}
	};
    return(
        
        <>
        <Card title="Geofence Report">
            <Flex alignItems="center" justifyContent="space-between" mobileFlex={false}>
                <Flex className="mb-1" mobileFlex={false}>
					<div className="mr-md-3 mb-3">
						<RangePicker/>
					</div>
					<div className="mr-md-3 mb-3">
						<Select 
							defaultValue="All" 
							className="w-100" 
							style={{ minWidth: 180 }} 
							onChange={handleShowStatus} 
							placeholder="Vehicle Number"
						>
                            <Option value="All">All</Option>
							<Option value="1">TN07AB0978</Option>
							<Option value="2">TN03CB0678</Option>
							
						</Select>
					</div>
					<div className="mr-md-3 mb-3">
						<Select 
							className="w-100" 
                            name="location"
							style={{ minWidth: 180 }} 
							onChange={handleShowStatus} 
							placeholder="Geofence Location"
						>
                            <Option value="All">All</Option>
							<Option value="1">Sproutwings Office</Option>
							<Option value="2">kanuvai</Option>
							<Option value="3">TVS Nagar</Option>
							
						</Select>
					</div>
                    <div className="mr-3 mb-3">
                        <Button type="primary" icon={<SearchOutlined/>} >Search</Button>
                    </div>
                    <div className="mb-3">
                        <Button type="primary" icon={<FileExcelOutlined/>} >Export</Button>
                    </div>
				</Flex>
                
                <div className="mb-3">
                    <Input placeholder="Search" prefix={<SearchOutlined />} onChange={e => onSearch(e)}/>
				</div>
                
            </Flex>
            <div className="table-responsive">
				<Table 
					bordered
                    columns={tableColumns} 
					dataSource={list} 
					rowKey='id' 
					rowSelection={{
						selectedRowKeys: selectedRowKeys,
						type: 'checkbox',
						preserveSelectedRowKeys: false,
						...rowSelection,
					}}
				/>
			</div>
				
        </Card>
		
        </>
    )
}
export default GeofenceReport;