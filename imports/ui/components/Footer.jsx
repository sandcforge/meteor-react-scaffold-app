import React from 'react';

import {white as colorWhite, grey900 as colorGrey900, } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import IconCall from 'material-ui/svg-icons/communication/call';
import IconEmail from 'material-ui/svg-icons/communication/email';
import IconPerson from 'material-ui/svg-icons/social/person';
import IconPlace from 'material-ui/svg-icons/maps/place';
import SvgIcon from 'material-ui/SvgIcon';

const FacebookIcon = (props) => {
  let p = {viewBox:'00 00 600 600'};
  Object.assign(p, props );
  return(
  <SvgIcon {...p }>
    <path d="M273.443,159.354l0.122-41.951c0-21.857,1.52-33.561,32.831-33.561h57.941V0h-83.021     c-80.559,0-99.102,41.617-99.102,109.985l0.091,49.369l-61.133,0.03v83.811h61.133v243.196h91.168l0.061-243.196l82.778-0.03     l8.907-83.811H273.443z" />
  </SvgIcon>
)
};

const TwitterIcon = (props) => {
  let p = {viewBox:'0 0 600 600'};
  Object.assign(p, props );
  return(
  <SvgIcon {...p }>
    <path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411    c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513    c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101    c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104    c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194    c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485    c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z" />
  </SvgIcon>
)
};

const WechatIcon = (props) => {
  let p = {viewBox:'100 0 950 950'};
  Object.assign(p, props );
  return(
  <SvgIcon {...p }>
    <path d="M760.0001,575.9995 C778.7781,575.9995 794.0001,560.7775 794.0001,541.9995 C794.0001,523.2225 778.7781,507.9995 760.0001,507.9995 C741.2221,507.9995 726.0001,523.2225 726.0001,541.9995 C726.0001,560.7775 741.2221,575.9995 760.0001,575.9995 L760.0001,575.9995 Z M594.0001,575.9995 C612.7781,575.9995 628.0001,560.7775 628.0001,541.9995 C628.0001,523.2225 612.7781,507.9995 594.0001,507.9995 C575.2221,507.9995 560.0001,523.2225 560.0001,541.9995 C560.0001,560.7775 575.2221,575.9995 594.0001,575.9995 L594.0001,575.9995 Z M499.0001,378.9995 C521.0911,378.9995 539.0001,361.0915 539.0001,338.9995 C539.0001,316.9085 521.0911,298.9995 499.0001,298.9995 C476.9081,298.9995 459.0001,316.9085 459.0001,338.9995 C459.0001,361.0915 476.9081,378.9995 499.0001,378.9995 L499.0001,378.9995 Z M298.0001,378.9995 C320.0911,378.9995 338.0001,361.0915 338.0001,338.9995 C338.0001,316.9085 320.0911,298.9995 298.0001,298.9995 C275.9091,298.9995 258.0001,316.9085 258.0001,338.9995 C258.0001,361.0915 275.9091,378.9995 298.0001,378.9995 L298.0001,378.9995 Z M776.8571,807.1595 C772.6091,804.6995 767.5371,804.1385 762.8391,805.5585 C736.2041,813.6095 707.4661,817.9995 677.5001,817.9995 C539.1531,817.9995 427.0001,724.4275 427.0001,608.9995 C427.0001,493.5725 539.1531,399.9995 677.5001,399.9995 C815.8471,399.9995 928.0001,493.5725 928.0001,608.9995 C928.0001,672.7565 893.7831,729.8445 839.8361,768.1795 C835.5081,771.2555 833.5431,776.6935 834.8891,781.8295 L846.6811,826.8135 C850.2121,840.2815 843.2421,845.5925 831.1931,838.6175 L776.8571,807.1595 L776.8571,807.1595 Z M297.5531,655.4165 C329.2491,664.8575 363.4031,669.9995 399.0001,669.9995 C404.4311,669.9995 409.8271,669.8805 415.1871,669.6435 C408.5501,650.0365 405.0001,629.3615 405.0001,607.9995 C405.0001,482.0785 528.3461,379.9995 680.5001,379.9995 C685.8201,379.9995 691.1041,380.1245 696.3491,380.3705 C673.7761,260.6095 549.2431,168.9995 399.0001,168.9995 C232.7621,168.9995 98.0001,281.1525 98.0001,419.4995 C98.0001,495.5515 138.7241,563.6875 203.0131,609.6295 C209.0661,613.9545 211.8381,621.5525 209.9121,628.7395 L195.7641,681.5305 C191.4941,697.4635 199.6551,703.6955 213.9001,695.3775 L278.3531,657.7455 C284.1591,654.3555 291.1091,653.4965 297.5531,655.4165 Z" />
  </SvgIcon>
)
};


export default class Footer extends React.Component {
  render() {
    const footerContainerStyle = {
      backgroundColor: colorGrey900,
      textAlign: 'center',
      paddingBottom: 16,
      paddingTop: 16
    }

    const footerTextStyle =
      { color: colorWhite,
        fontFamily: 'Roboto, sans-serif',
        fontSize:18,
      }
    ;

      const wechatModalDialogContainerStyle = {
        display: 'flex',
        display: '-webkit-flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }

      const wechatModalDialogBarcodeStyle = {
        display: 'flex',
        display: '-webkit-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }

      const placeModalDialogContainerStyle = {
        display: 'flex',
        display: '-webkit-flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }

      const placeModalDialogMapStyle = {
        display: 'flex',
        display: '-webkit-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }

      const phoneAndEmailModalDialogContainerStyle = {
        display: 'flex',
        display: '-webkit-flex',
        flexWrap: 'wrap',
        alignItems: 'center',
      }

    return (
      <div style={footerContainerStyle}>
        <div style={footerTextStyle}>© Copyright 2016</div>
        <br/>
        <div style={footerTextStyle}>Support: sandcforge@gmail.com </div>
        <a href=''>
          <IconButton tooltip={'Facebook'} >
            <FacebookIcon color={colorWhite}/>
          </IconButton>
        </a>

        <IconButton
          tooltip={'Wechat'}
          >
          <WechatIcon color={colorWhite}/>
        </IconButton>

        <IconButton
          tooltip={'Twitter'}
          >
          <TwitterIcon color={colorWhite}/>
        </IconButton>

        <IconButton
          tooltip={'Email'}
          onTouchTap={ () => this.refs.refEmailModalDialog._handleOpen() }
          >
          <IconEmail color={colorWhite}/>
        </IconButton>



      </div>


    )
  }
}
