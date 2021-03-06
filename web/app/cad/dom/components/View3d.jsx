import React from 'react';
import PlugableControlBar from './PlugableControlBar';
import ls from './View3d.less';
import Abs from 'ui/components/Abs';
import {AuxiliaryToolbar, HeadsUpToolbar} from './PlugableToolbar';
import UISystem from './UISystem';
import WizardManager from '../../craft/wizard/components/WizardManager';
import FloatView from './FloatView';
import HistoryTimeline from '../../craft/ui/HistoryTimeline';
import SelectedModificationInfo from '../../craft/ui/SelectedModificationInfo';
import Explorer from './Explorer';
import BottomStack from './BottomStack';


export default class View3d extends React.Component {

  shouldComponentUpdate() {
    //we don't want the dom to be updated under any circumstances or we loose the WEB-GL container
    return false;
  }

  render() {
    return <UISystem className={ls.root}>
      <FloatView />
      <div className={ls.mainArea} >
        <div id='viewer-container' />
        <Abs right={5} top={5}>
          <HeadsUpToolbar/>
          <Abs right={0} top='calc(100% + 15px)'>
            <AuxiliaryToolbar small vertical/>
          </Abs>
        </Abs>
        <BottomStack>
          <HistoryTimeline />
          <PlugableControlBar/>
        </BottomStack>
        <WizardManager/>
      </div>
      <SelectedModificationInfo />
    </UISystem>;
  }

  componentWillUnmount() {
    throw 'big no-no';
  }
}