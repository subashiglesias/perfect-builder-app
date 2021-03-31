import React, {useEffect, useState} from 'react';
import './ItemsPage.scss';
import {Avatar} from "@material-ui/core";
import addField from "../../../images/add_box.svg";
import Styles from "../../ReactTable/Styles/Styles";
import ReactTable from "../../ReactTable";
import Modal from "react-modal";
import editField from "../../../images/edit-black.svg";
import deleteField from "../../../images/delete-black.svg";
import ItemsForm from "../../Forms/ItemsForm";
import SelectField from "../../SelectField/SelectField";
import {ItemTypeList, ItemUnitList} from "../../../constants";

var moment = require('moment'); // require


const ItemsPage = ({itemList, getAllItems, createOrUpdateItem, deleteItem, username}) => {
    const [dialog, setDialog] = useState('');
    const [editItem, setEditItem] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const [selectedMaterialType, setSelectedMaterialType] = useState("");

    useEffect(() => {
        getAllItems(selectedMaterialType)
    }, [selectedMaterialType]);

    const toggleEditModal = () => {
        setOpenModal(!openModal);
    }

    const editRow = (row, AllItems) => {
        AllItems.forEach(async items => {
            if (items.id === row.values.itemId) {
                await setEditItem(items)
                toggleEditModal()
            }
        });
    }

    const deleteRow = (row, AllItems) => {
        AllItems.forEach(async items => {
            if (items.id === row.values.itemId) {
                deleteItem(items.id)
            }
        });
    }

    const columns = [
        {
            Header: 'Items',
            columns: [
                {
                    Header: 'Name',
                    accessor: 'itemName',
                },
                {
                    Header: 'Item ID',
                    accessor: 'itemId',
                },
                {
                    Header: 'Item Type',
                    accessor: 'itemType',
                },
                {
                    Header: 'Rate',
                    accessor: 'rate',
                },
                {
                    Header: 'GST item',
                    accessor: 'gst',
                },
                {
                    Header: 'CGST %',
                    accessor: 'cgst',
                },
                {
                    Header: 'SGST %',
                    accessor: 'sgst',
                },
                {
                    Header: 'IGST %',
                    accessor: 'igst',
                },
                {
                    Header: 'Description',
                    accessor: 'description',
                },
                {
                    Header: 'Created By',
                    accessor: 'createdBy',
                },
                {
                    Header: 'Created Date',
                    accessor: 'createdDate',
                },
                {
                    Header: 'Edit',
                    Cell: ({row}) => (<span onClick={() => editRow(row, itemList)}>
                            <Avatar alt="Edit Item" src={editField}/>
                        </span>),
                },
                {
                    Header: 'Delete',
                    Cell: ({row}) => (<span onClick={() => deleteRow(row, itemList)}>
                            <Avatar alt="Add Item" src={deleteField}/>
                        </span>),
                },
            ],
        },
    ]

    const formatData = (items) => {
        const data = []
        items.forEach(item => data.push({
            itemName: item.name,
            itemId: item.id,
            itemType: item.itemType,
            itemUnit: item.itemUnit,
            rate: item.rate,
            gst: item.gst ? "Yes" : "No",
            cgst: item.cgst,
            sgst: item.sgst,
            igst: item.igst,
            description: item.description,
            createdBy: item.createdBy,
            createdDate: item.createdDate,
        }))
        return data;
    }

    const getItemUnits = formValues => {
        const ItemUnits = []
        ItemUnitList.forEach(itemUnit => {
            if(formValues.get(itemUnit) === "") ItemUnits.push(itemUnit)
        })
        return ItemUnits
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const body = createNewItemBody(new FormData(form));
        createOrUpdateItem(body);
        toggleEditModal();
    };

    const createNewItemBody = (formValues) => {
        return {
            id: formValues.get('id'),
            name: formValues.get('name'),
            itemType: formValues.get('itemType'),
            itemUnit: getItemUnits(formValues),
            rate: formValues.get('rate'),
            gst: formValues.get('gst') === "",
            cgst: formValues.get('cgst'),
            sgst: formValues.get('sgst'),
            igst: formValues.get('igst'),
            description: formValues.get('description'),
            createdBy: username,
            createdDate: moment().format('DD/MM/YYYY'),
        }
    }

    return (
        <div className="items-page">
            <SelectField label="Select item type" id={'itemType'} updateHandler={setSelectedMaterialType} required
                         optionsLabel={ItemTypeList} optionsValue={ItemTypeList}/>
            <div className="items-table">
                <div className="add-new">
                <span>
                    <Avatar alt="Add item" src={addField} onClick={() => {
                        setEditItem({})
                        setOpenModal(true)
                    }}/>
                </span>
                </div>
                <Styles>
                    <ReactTable columns={columns} data={formatData(itemList)}/>
                </Styles>
                <Modal
                    isOpen={openModal}
                    ariaHideApp={false}
                    onRequestClose={toggleEditModal}
                    contentLabel="Example Modal"
                >
                    <div className="Item-page__form">
                        <ItemsForm handleSubmit={handleSubmit} dialog={dialog} itemType={selectedMaterialType}
                                   fieldValues={editItem}/>
                    </div>
                    <span className="modalClose" onClick={() => {
                        toggleEditModal()
                        setEditItem({})
                    }}>
              ✕
            </span>
                </Modal>
            </div>
        </div>
    )

}

export default ItemsPage;