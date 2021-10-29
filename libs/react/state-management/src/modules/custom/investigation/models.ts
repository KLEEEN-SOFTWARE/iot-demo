import { AddWidget, InitializeWidgets } from '../../../types/actions/investigation';

import { InvestigationState } from '../../../types/state';

const initialState: InvestigationState = {
  investigationWidgets: [],
};

const Investigation = {
  initialState,
  reducers: {
    addWidget: (state: InvestigationState, { payload: newInvestigationWidget }: AddWidget) => {
      state.investigationWidgets = [
        { ...newInvestigationWidget, isNewWidget: true },
        ...state.investigationWidgets,
      ];
    },

    clearInvestigation(state: InvestigationState): void {
      state.investigationWidgets = [];
    },

    initializeWidgets: (state: InvestigationState, { payload }: InitializeWidgets) => {
      state.investigationWidgets = [...payload];
    },

    dispatchCustomAction: (state, action) => {
      const widgetExists = state.investigationWidgets.some((w) => w.id === action?.payload.widgetId);
      if (!widgetExists) {
        console.error('Invalid state', action.payload);
        return state;
      }
    },

    dispatchCustomActionSuccess: (state) => {
      return state;
    },

    dispatchCustomActionFailure: (state) => {
      return state;
    },
  },
};

export default Investigation;
