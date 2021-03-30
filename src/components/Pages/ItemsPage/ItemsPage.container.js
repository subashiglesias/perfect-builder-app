import { connect } from 'react-redux';
import {
    getItems, createOrUpdateItemData, deleteItemData
} from '../../../actions';
import {getItemList, getUserName} from "../../../utils/redux-selectors";

const mapStateToProps = state => ({
    username: getUserName(state),
    itemList: getItemList(state),
});


const mapDispatchToProps = dispatch => ({
    getAllItems: (body) => {
        dispatch(getItems(body));
    },
    createOrUpdateItem: (body) => {
        dispatch(createOrUpdateItemData(body));
    },
    deleteItem: (body) => {
        dispatch(deleteItemData(body));
    },
});

export default connect(mapStateToProps, mapDispatchToProps);