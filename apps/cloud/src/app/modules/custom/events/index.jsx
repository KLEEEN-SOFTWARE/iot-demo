import './viz.scss';

import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';

function Events({ translate, ...props }) {
  return (
    <AccessControl id={roleAccessKeyTag(`navigation.events`)}>
      <div id="viz" className="viz center-parent">
        <svg width="0" height="0">
          <defs>
            <linearGradient id="linearGradient-1">
              <stop stop-color="#9C0707" offset="0%"></stop>
              <stop stop-color="#BE2929" offset="100%"></stop>
            </linearGradient>

            <linearGradient id="linearGradient-2">
              <stop stop-color="#37AAD9" offset="0%"></stop>
              <stop stop-color="#A1E0F9" offset="100%"></stop>
            </linearGradient>
          </defs>
        </svg>

        <img className="outer-1 center-child" src="assets/svg/outer-1.svg" alt="outer-1" />
        <img className="inner-1 center-child" src="assets/svg/inner-1.svg" alt="outer-1" />
        <img className="shield center-child" src="assets/svg/shield.svg" alt="outer-1" />

        <img className="top-left center-child" src="assets/svg/top-left.svg" alt="outer-1" />
        <img className="bottom-left center-child" src="assets/svg/bottom-left.svg" alt="outer-1" />
        <img className="bottom-right center-child" src="assets/svg/bottom-right.svg" alt="outer-1" />
        <img className="top-right center-child" src="assets/svg/top-right.svg" alt="outer-1" />

        <img className="connect-top-left center-child" src="assets/svg/connect-top-left.svg" alt="outer-1" />
        <img
          className="connect-bottom-left center-child"
          src="assets/svg/connect-bottom-left.svg"
          alt="outer-1"
        />
        <img
          className="connect-bottom-right center-child"
          src="assets/svg/connect-bottom-right.svg"
          alt="outer-1"
        />
        <img
          className="connect-top-right center-child"
          src="assets/svg/connect-top-right.svg"
          alt="outer-1"
        />

        <img className="circle-number center-child" src="assets/svg/circle-number.svg" alt="outer-1" />
        <img className="hex-number center-child" src="assets/svg/hex-number.svg" alt="outer-1" />
        <img className="diamond-number center-child" src="assets/svg/diamond-number.svg" alt="outer-1" />
        <img className="star-number center-child" src="assets/svg/star-number.svg" alt="outer-1" />

        <div className="circle-container center-child-horizontal">
          <img className="circle2 center-child" src="assets/svg/circle2.svg" alt="outer-1" />
          <img className="circle center-child" src="assets/svg/circle.svg" alt="outer-1" />
        </div>

        <div className="hex-container center-child-vertical">
          <img className="hex2 center-child" src="assets/svg/hex2.svg" alt="outer-1" />
          <img className="hex center-child" src="assets/svg/hex.svg" alt="outer-1" />
        </div>

        <div className="diamond-container center-child-horizontal">
          <img className="diamond2 center-child" src="assets/svg/diamond 2.svg" alt="outer-1" />
          <img className="diamond center-child" src="assets/svg/diamond.svg" alt="outer-1" />
        </div>

        <div className="star-container center-child-vertical">
          <img className="star2 center-child" src="assets/svg/star2.svg" alt="outer-1" />
          <img className="star center-child" src="assets/svg/star.svg" alt="outer-1" />
        </div>

        <div className="raw-data center-child-right">
          <div className="viz-content-title">RAW DATA</div>
          <div className="clearfix">
            <div className="content-value-container float-left">
              <p className="viz-content value">5.6M</p>
            </div>
            <div class="float-left trend">
              <p class="change">27%</p>
              <i class="arrow down"></i>
              <div>
                <svg class="sparkline" width="55" height="21" stroke-width="3">
                  <path
                    d="M4 14.24 L 4 14.24 L 7.615384615384615 15.95 L 11.23076923076923 13.8 L 14.846153846153847 11.6 L 18.46153846153846 7.2 L 22.076923076923077 12.7 L 25.692307692307693 8.3 L 29.307692307692307 5 L 32.92307692307692 15.45 L 36.53846153846154 13.8 L 40.15384615384615 11.6 L 43.76923076923077 7.2 L 47.38461538461539 12.7 L 51 14.72"
                    fill="none"
                  ></path>
                  <path
                    d="M4 14.24 L 4 14.24 L 7.615384615384615 15.95 L 11.23076923076923 13.8 L 14.846153846153847 11.6 L 18.46153846153846 7.2 L 22.076923076923077 12.7 L 25.692307692307693 8.3 L 29.307692307692307 5 L 32.92307692307692 15.45 L 36.53846153846154 13.8 L 40.15384615384615 11.6 L 43.76923076923077 7.2 L 47.38461538461539 12.7 L 51 14.72 V 21 L 4 21 Z"
                    stroke="none"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <p className="sub-content">This data represents logs, cloutrail entries, and endpoint</p>
            <p className="sub-content">records that are ingested by LastLine</p>
          </div>
        </div>

        <div className="behaviors center-child-right">
          <div className="viz-content-title">BEHAVIORS</div>
          <div className="clearfix">
            <div className="content-value-container float-left">
              <p className="viz-content value">29.3k</p>
            </div>
            <div className="float-left trend">
              <p className="change"></p>
              <i className="arrow"></i>
              <div>
                <svg className="sparkline" width="55" height="21" stroke-width="3"></svg>
              </div>
            </div>
          </div>
          <div>
            <p className="sub-content">IoT extracts entities behaviors from how and</p>
            <p className="sub-content">where they interact with network devices</p>
          </div>
        </div>

        <div className="detected-events center-child">
          <div className="viz-content-title">DETECTED EVENTS</div>
          <div className="clearfix">
            <div className="content-value-container float-left">
              <p className="viz-content value">193</p>
            </div>
            <div class="float-left trend">
              <p class="change">46%</p>
              <i class="arrow down"></i>
              <div>
                <svg class="sparkline" width="55" height="21" stroke-width="3">
                  <path
                    d="M4 14.24 L 4 14.24 L 7.615384615384615 10.5 L 11.23076923076923 13.8 L 14.846153846153847 11.6 L 18.46153846153846 7.2 L 22.076923076923077 12.7 L 25.692307692307693 8.3 L 29.307692307692307 5 L 32.92307692307692 15.45 L 36.53846153846154 13.8 L 40.15384615384615 11.6 L 43.76923076923077 7.2 L 47.38461538461539 12.7 L 51 15.05"
                    fill="none"
                  ></path>
                  <path
                    d="M4 14.24 L 4 14.24 L 7.615384615384615 10.5 L 11.23076923076923 13.8 L 14.846153846153847 11.6 L 18.46153846153846 7.2 L 22.076923076923077 12.7 L 25.692307692307693 8.3 L 29.307692307692307 5 L 32.92307692307692 15.45 L 36.53846153846154 13.8 L 40.15384615384615 11.6 L 43.76923076923077 7.2 L 47.38461538461539 12.7 L 51 15.05 V 21 L 4 21 Z"
                    stroke="none"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <p className="sub-content">IoT uses advanced machine learning and AI</p>
            <p className="sub-content">techniques to find anomalous activities</p>
          </div>
        </div>

        <div className="high-critical-events center-child">
          <div className="viz-content-title">HIGH &amp; CRITICAL EVENTS</div>
          <div className="clearfix">
            <div className="content-value-container float-left">
              <p className="viz-content value">13</p>
            </div>
            <div className="float-left trend">
              <p className="change"></p>
              <i className="arrow"></i>
              <div>
                <svg className="sparkline" width="55" height="21" stroke-width="3"></svg>
              </div>
            </div>
          </div>
          <div>
            <p className="sub-content">To prevent alert fatigue, LastLine bubbles up only the</p>
            <p className="sub-content">most salient events</p>
          </div>
        </div>

        <div className="spacer center-child"></div>
        <div className="particle-container bubbles center-child">
          <span
            className="particle"
            style={{ top: '23%', left: '87%', width: '19.2px', height: '19.2px', animationDelay: '2.1s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '59%', left: '60%', width: '12.9px', height: '12.9px', animationDelay: '2.5s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '56%', left: '87%', width: '12.8px', height: '12.8px', animationDelay: '1.7s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '43%', left: '26%', width: '17.7px', height: '17.7px', animationDelay: '1.4s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '80%', left: '79%', width: '14.1px', height: '14.1px', animationDelay: '1.5s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '49%', left: '4%', width: '13.3px', height: '13.3px', animationDelay: '2.1s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '49%', left: '41%', width: '18.9px', height: '18.9px', animationDelay: '1.2s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '20%', left: '72%', width: '18.4px', height: '18.4px', animationDelay: '1.7s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '75%', left: '11%', width: '15.6px', height: '15.6px', animationDelay: '0.6s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '38%', left: '71%', width: '12.1px', height: '12.1px', animationDelay: '1.6s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '72%', left: '23%', width: '18.1px', height: '18.1px', animationDelay: '2.8s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '52%', left: '4%', width: '11.4px', height: '11.4px', animationDelay: '2.3s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '60%', left: '74%', width: '18.8px', height: '18.8px', animationDelay: '2s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '28%', left: '33%', width: '19.1px', height: '19.1px', animationDelay: '1.3s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '61%', left: '68%', width: '12.1px', height: '12.1px', animationDelay: '1.1s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '37%', left: '88%', width: '12.4px', height: '12.4px', animationDelay: '2.8s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '70%', left: '90%', width: '15.7px', height: '15.7px', animationDelay: '1s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '27%', left: '21%', width: '17.7px', height: '17.7px', animationDelay: '0.7s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '69%', left: '47%', width: '15.1px', height: '15.1px', animationDelay: '1.1s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '47%', left: '47%', width: '10.7px', height: '10.7px', animationDelay: '0.7s' }}
          ></span>
          <span
            className="particle"
            style={{ top: '33%', left: '51%', width: '14.2px', height: '14.2px', animationDelay: '1.3s' }}
          ></span>
        </div>

        <div className="spacer-2 center-child"></div>

        <div className="star-anim-container stars center-child">
          <span className="star" style={{ width: '25px', height: '25px' }}></span>
          <span className="star" style={{ width: '25px', height: '25px', animationDelay: '1.5s' }}></span>
          <span className="star" style={{ width: '25px', height: '25px', animationDelay: '3s' }}></span>
          <span className="star" style={{ width: '25px', height: '25px', animationDelay: '4.5s' }}></span>
          <span className="star" style={{ width: '25px', height: '25px', animationDelay: '6s' }}></span>
        </div>
      </div>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Events);
