import React, { Component } from 'react'
import { connect } from 'react-redux';
import Checkbox from './checkbox';
import Heart from 'react-icons/fa/heart-o';

const styles = {
  left: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
  },
  right: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px'
  }
}

class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      xiamiDisabled: false,
      neteaseDisabled: false,
      qqDisabled: true
    };
    this.changeVendor = this.changeVendor.bind(this);
  }
  changeVendor(vendor, e){
    if(e){
      if(this.props.searchVendor.length === 1){
        // if only one left and check one, undisable all
        this.setState({
          xiamiDisabled: false,
          qqDisabled: false,
          neteaseDisabled: false,
        });
      }
      this.props.updateVendor(this.props.searchVendor.concat([vendor]));
    } else {
      if(this.props.searchVendor.length === 2){
        // if only two left and uncheck one, disable another
        let another = [...this.props.searchVendor].filter(i => i !== vendor)[0];
        this.setState({
          [another + 'Disabled']: true
        });
      }
      this.props.updateVendor(this.props.searchVendor.filter(i => i !== vendor));
    }
  }
  render () {
    return(
      <div className="footer">
        <div style={styles.left}>
          made with <Heart className="heart" /> by superqjq |
          <a style={{marginLeft: '5px'}} href="https://www.lovelifeloveyou.club/" target="_blank">
            blog
          </a>
        </div>
        <div style={styles.right}>
          <div style={styles.searchVendor}>
            搜索源：
          </div>
          <Checkbox
            default={true}
            onCheck={() => {}}
            disabled={true}
          >
            Netease
          </Checkbox>
          <Checkbox
            default={true}
            onCheck={() => {}}
            disabled={true}
          >
            Xiami
          </Checkbox>
          <Checkbox
            default={true}
            onCheck={() => {}}
            disabled={true}
          >
            QQ
          </Checkbox>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchVendor: state.searchKey.vendor,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateVendor: (vendor) => {
      dispatch({type: 'SEARCH_KET_UPDATE_VENDOR', vendor});
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
