import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true,
	state() {
		return {
			listOfModerators: [],
			listOfAllModerators: [],
			listOfInvitedModerators: [],
			handleTime: '',
			after: '',
			before: '',
			//////////////LEAVE MOD/////////////
			leaveModSuccessfully: false,
			//////////////INVITE MOD/////////////
			inviteModSuccessfully: false,
			//////////////SPAM/////////////////
			listOfSpams: [],
			approveSuccessfully: [],
			//////////////RULES/////////////////
			addRuleSuccessfully: false,
			listOfRules: [],
			updateRuleSuccessfully: false,
			deleteRuleSuccessfully: false,
			updateRulesSuccessfully: false,

			//////////////FLAIRS/////////////////
			listOfFlairs: [],
			addFlairSuccessfully: false,
			updateFlairSuccessfully: false,
			deleteFlairSuccessfully: false,
			updateFlairsSuccessfully: false,

			//////////////////////BAN////////////////////////
			banUserSuccessfully: false,
		};
	},
	mutations,
	actions,
	getters,
};
