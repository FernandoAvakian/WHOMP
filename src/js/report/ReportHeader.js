import React, {Component} from 'react';
import {getUrlParams} from 'utils/params';
import ReportAnalysisArea from './ReportMap';


export default class ReportHeader extends Component {
    constructor(props) {
      super(props);
    }

    printReport = () => {
        console.log('print report');
      };

    getReportInfo = () => {
        console.log('get report info');
    };

    shareReport= () => {
        console.log('share report');
    };

    render() {
        const params = getUrlParams(location.href);
        const {title, logoUrl, logoLinkUrl} = params;
        console.log('params', params);// subtitle was in params
        
        return (
            <div className="report">
                <header className="report-header">
                    <div className='report-header__logo-container'>
                        <a id="logo-anchor" target="_blank" href={logoLinkUrl}>
                            <img src={logoUrl} id="logo" className="report-header__logo" />
                        </a>
                    </div>
                    <div className="report-header__title-container">
                        <h1 id="report-title" className="report-header__title">
                            {`${title} Custom Analysis`}
                        </h1>
                        <div id="report-icons" className="report-header__icon-container">
                            <div className="report-print" onClick={this.printReport}>
                                <svg class='svg-icon report-header__icon report-header__icon-print'>
                                    <svg id="icon-print" viewBox="0 0 19 14">
                                        <title>Print</title>
                                        <path d="M16.000,10.000 C16.000,10.000 16.000,12.000 16.000,12.000 C16.000,12.000 16.000,13.000 16.000,13.000 C16.000,13.000 16.000,14.000 16.000,14.000 C16.000,14.000 3.000,14.000 3.000,14.000 C3.000,14.000 3.000,13.000 3.000,13.000 C3.000,13.000 3.000,12.000 3.000,12.000 C3.000,12.000 3.000,10.000 3.000,10.000 C3.000,10.000 0.000,10.000 0.000,10.000 C0.000,10.000 0.000,3.000 0.000,3.000 C0.000,3.000 1.000,3.000 1.000,3.000 C1.000,3.000 2.000,3.000 2.000,3.000 C2.000,3.000 3.000,3.000 3.000,3.000 C3.000,3.000 3.000,0.000 3.000,0.000 C3.000,0.000 16.000,0.000 16.000,0.000 C16.000,0.000 16.000,3.000 16.000,3.000 C16.000,3.000 17.000,3.000 17.000,3.000 C17.000,3.000 18.000,3.000 18.000,3.000 C18.000,3.000 19.000,3.000 19.000,3.000 C19.000,3.000 19.000,10.000 19.000,10.000 C19.000,10.000 16.000,10.000 16.000,10.000 ZM5.000,12.000 C5.000,12.000 14.000,12.000 14.000,12.000 C14.000,12.000 14.000,7.993 14.000,7.993 C14.000,7.993 5.000,7.993 5.000,7.993 C5.000,7.993 5.000,12.000 5.000,12.000 ZM2.889,8.002 C2.889,8.002 2.889,8.000 2.889,8.000 C2.889,8.000 3.000,8.000 3.000,8.000 C3.000,8.000 3.000,7.000 3.000,7.000 C3.000,7.000 3.000,6.000 3.000,6.000 C3.000,6.000 16.000,6.000 16.000,6.000 C16.000,6.000 16.000,7.000 16.000,7.000 C16.000,7.000 16.000,8.000 16.000,8.000 C16.000,8.000 16.111,8.000 16.111,8.000 C16.111,8.000 16.111,8.002 16.111,8.002 C16.111,8.002 17.000,8.002 17.000,8.002 C17.000,8.002 17.000,5.000 17.000,5.000 C17.000,5.000 2.000,5.000 2.000,5.000 C2.000,5.000 2.000,8.002 2.000,8.002 C2.000,8.002 2.889,8.002 2.889,8.002 ZM1.000,3.996 C1.000,3.996 1.000,3.996 1.000,3.996 C1.000,3.996 1.000,8.002 1.000,8.002 C1.000,8.002 1.000,8.002 1.000,8.002 C1.000,8.002 1.000,5.000 1.000,5.000 C1.000,5.000 1.000,4.000 1.000,4.000 C1.000,4.000 1.000,3.996 1.000,3.996 ZM2.000,3.996 C2.000,3.996 2.000,4.000 2.000,4.000 C2.000,4.000 17.000,4.000 17.000,4.000 C17.000,4.000 17.000,3.996 17.000,3.996 C17.000,3.996 2.000,3.996 2.000,3.996 ZM18.000,3.996 C18.000,3.996 18.000,3.996 18.000,3.996 C18.000,3.996 18.000,4.000 18.000,4.000 C18.000,4.000 18.000,5.000 18.000,5.000 C18.000,5.000 18.000,8.002 18.000,8.002 C18.000,8.002 18.000,8.002 18.000,8.002 C18.000,8.002 18.000,3.996 18.000,3.996 Z" fillRule="evenodd"></path>
                                    </svg>
                                </svg>
                            </div>
                            <div className="report-info" onClick={this.getReportInfo}>
                                <svg class='svg-icon report-header__icon report-header__icon-info'>
                                    <svg id="shape-info" viewBox="0 0 16 32">
                                        <title>Info</title>
                                        <path d="M2 16c1.105 0 2 0.895 2 2v8c0 1.105-0.895 2-2 2h-2v4h16v-4h-1.992c-1.102 0-2.008-0.895-2.008-2l-0.004-14h-11.996v4h2zM4 4c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4z"></path>
                                    </svg>
                                </svg>
                            </div>
                            <div className="report-share" onClick={this.shareReport}>
                                <svg class='svg-icon report-header__icon'>
                                        <svg id="icon-share" viewBox="0 0 1024 1024">
                                            <title>Share</title>
                                            <path className="path1" d="M183.488 507.392c0 65.024 52.672 117.696 117.696 117.696 31.744 0 60.608-12.544 81.792-32.96l193.792 96.896c-0.576 4.736-0.96 9.6-0.96 14.528 0 65.024 52.672 117.696 117.696 117.696s117.696-52.672 117.696-117.696c0-65.024-52.672-117.696-117.696-117.696-31.744 0-60.48 12.544-81.6 32.96l-193.984-96.896c0.576-4.8 0.96-9.6 0.96-14.528s-0.384-9.728-0.96-14.528l193.792-96.896c21.184 20.416 50.048 32.96 81.792 32.96 65.024 0 117.696-52.672 117.696-117.696s-52.672-117.696-117.696-117.696c-65.024 0-117.696 52.672-117.696 117.696 0 4.928 0.384 9.792 0.96 14.528l-193.792 96.896c-21.184-20.416-50.048-32.96-81.792-32.96-65.024 0-117.696 52.672-117.696 117.696z"></path>
                                        </svg>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <ReportAnalysisArea />
                </header>
            </div>
        );
    }
}
