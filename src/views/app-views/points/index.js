import React,{useState} from 'react'
import {Table,Row,Col,Button,Card,Drawer,Select, Input,Form,DatePicker} from 'antd'
import Flex from 'components/shared-components/Flex'
const { Option } = Select
const { RangePicker } = DatePicker;
const tableColumns = [
    {
        title: 'S.No',
        dataIndex:'id'
    },
    {
        title: 'Point Type',
        dataIndex: 'point_type',
    },
    {
        title: 'Points',
        dataIndex: 'points',
    },
    {
        title: 'Plan',
        dataIndex: 'plan',
    },
    {
        title: 'Role',
        dataIndex: 'role',
    },
    {
        title: 'User Name',
        dataIndex: 'user_name',
    },
    {
        title: 'Transaction Date',
        dataIndex: 'created_at',
    },
]
const data_source = [
    {
        id:"1",
        point_type:"NEW",
        points:"500",
        plan:"BASIC+FUEL - 1 YEAR",
        role:"Admin",
        user_name:"Acute",
        created_at:"2023-08-01 01:00:00"
    },
    {
        id:"2",
        point_type:"RECHARGE",
        points:"100",
        plan:"FUEL - 3 MONTHS",
        role:"Distributor",
        user_name:"PSK Enginering",
        created_at:"2023-08-01 03:00:00"
    },
    {
        id:"3",
        point_type:"RECHARGE",
        points:"500",
        plan:"TEMPERATURE - 6 MONTHS",
        role:"Dealer",
        user_name:"ABC Dealer",
        created_at:"2023-08-02 05:00:00"
    },
    {
        id:"4",
        point_type:"NEW",
        points:"500",
        points:"100",
        plan:"BASIC+FUEL+TEMPERATURE - 6 MONTHS",
        role:"Distributor",
        user_name:"PSK Enginering",
        created_at:"2023-08-01 03:00:00"
    }
]
const Point = () => {
  return (
    <>
    <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
            <Card title="Point System">
                <Flex alignItems="center" justifyContent="space-between" mobileFlex={false}>
                    
                </Flex>
                <Table bordered columns={tableColumns} dataSource={data_source}></Table>
            </Card>
        </Col>
    </Row>
    </>
  )
}

export default Point