import { IMember, IPagination } from "../../domain/entities/members.entities";
import { MemberActions } from "../actions/MembersActions";

type Status = 'idle' | 'loading' | 'success' | 'failure';

interface MemberState {
  search: {
    status: Status;
    error: string | null;
    results: IMember[];
  };
  list: {
    status: Status;
    error: string | null;
    pagination : null|IPagination;
    data: IMember[];
  };
  add: {
    status: Status;
    error: string | null;
    newMember: IMember | null;
  };
}

const initialState: MemberState = {
  search: {
    status: 'idle',
    error: null,
    results: [],
  },
  list: {
    status: 'idle',
    error: null,
    pagination : null,
    data: [],
  },
  add: {
    status: 'idle',
    error: null,
    newMember: null,
  },
};

export const MembersReducer = (state = initialState, action: any): MemberState => {
  switch (action.type) {
    // 🔍 SEARCH
    case MemberActions.MEMBER_SEARCH_INIT:
      return {
        ...state,
        search: { status: 'loading', error: null, results: [] },
      };
    case MemberActions.MEMBER_SEARCH_SUCCESS:
      return {
        ...state,
        search: { status: 'success', error: null, results: action.payload.members },
      };
    case MemberActions.MEMBER_SEARCH_FAILURE:
      return {
        ...state,
        search: { status: 'failure', error: action.payload.error, results: [] },
      };
    case MemberActions.MEMBER_SEARCH_RESET:
      return {
        ...state,
        search: { status: 'idle', error: null, results: [] },
      };

    // 📦 FETCH
    case MemberActions.MEMBERS_FETCH_INIT:
      return {
        ...state,
        list: { status: 'loading', pagination : null,  error: null, data: [] },
      };
    case MemberActions.MEMBERS_FETCH_SUCCESS:
      return {
        ...state,
        list: { status: 'success', error: null, data: action.payload.members, pagination : action.payload.pagination },
      };
    case MemberActions.MEMBERS_FETCH_FAILURE:
      return {
        ...state,
        list: { status: 'failure', pagination : null, error: action.payload.error, data: [] },
      };
    case MemberActions.MEMBERS_FETCH_RESET:
      return {
        ...state,
        list: { status: 'idle',  pagination : null, error: null, data: [] },
      };

    // ➕ ADD
    case MemberActions.MEMBER_ADD_INIT:
      return {
        ...state,
        add: { status: 'loading', error: null, newMember: null },
      };
    case MemberActions.MEMBER_ADD_SUCCESS:
      return {
        ...state,
        add: { status: 'success', error: null, newMember: action.payload.member },
        list: {
          ...state.list,
          data: [action.payload.member, ...state.list.data], 
        },
      };
    case MemberActions.MEMBER_ADD_FAILURE:
      return {
        ...state,
        add: { status: 'failure', error: action.payload.error, newMember: null },
      };
    case MemberActions.MEMBER_ADD_RESET:
      return {
        ...state,
        add: { status: 'idle', error: null, newMember: null },
      };

    default:
      return state;
  }
};
