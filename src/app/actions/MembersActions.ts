import { IMember, IPagination } from "../../domain/entities/members.entities";

export const MemberActions = {
  MEMBER_SEARCH_INIT: 'MEMBER_SEARCH_INIT',
  MEMBER_SEARCH_SUCCESS: 'MEMBER_SEARCH_SUCCESS',
  MEMBER_SEARCH_FAILURE: 'MEMBER_SEARCH_FAILURE',
  MEMBER_SEARCH_RESET: 'MEMBER_SEARCH_RESET',

  MEMBERS_FETCH_INIT: 'MEMBER_FETCH_INIT',
  MEMBERS_FETCH_SUCCESS: 'MEMBER_FETCH_SUCCESS',
  MEMBERS_FETCH_FAILURE: 'MEMBER_FETCH_FAILURE',
  MEMBERS_FETCH_RESET: 'MEMBER_FETCH_RESET',

  MEMBER_ADD_INIT: 'MEMBER_ADD_INIT',
  MEMBER_ADD_SUCCESS: 'MEMBER_ADD_SUCCESS',
  MEMBER_ADD_FAILURE: 'MEMBER_ADD_FAILURE',
  MEMBER_ADD_RESET: 'MEMBER_ADD_RESET',
} 

export const searchMembersInit = () => ({
  type: MemberActions.MEMBER_SEARCH_INIT,
});

export const searchMembersSuccess = (members: IMember[]) => ({
  type: MemberActions.MEMBER_SEARCH_SUCCESS,
  payload: { members },
});

export const searchMembersFailure = (error: any) => ({
  type: MemberActions.MEMBER_SEARCH_FAILURE,
  payload: { error },
});

export const searchMembersReset = () => ({
  type: MemberActions.MEMBER_SEARCH_RESET,
});

export const fetchMembersInit = () => ({
  type: MemberActions.MEMBERS_FETCH_INIT,
});

export const fetchMembersSuccess = (members: IMember[], pagination : IPagination) => ({
  type: MemberActions.MEMBERS_FETCH_SUCCESS,
  payload: { members, pagination },
});

export const fetchMembersFailure = (error: string) => ({
  type: MemberActions.MEMBERS_FETCH_FAILURE,
  payload: { error },
});

export const fetchMembersReset = () => ({
  type: MemberActions.MEMBERS_FETCH_RESET,
});

export const addMemberInit = () => ({
  type: MemberActions.MEMBER_ADD_INIT,
});

export const addMemberSuccess = (member: IMember) => ({
  type: MemberActions.MEMBER_ADD_SUCCESS,
  payload: { member },
});

export const addMemberFailure = (error: any) => ({
  type: MemberActions.MEMBER_ADD_FAILURE,
  payload: { error },
});

export const addMemberReset = () => ({
  type: MemberActions.MEMBER_ADD_RESET,
});
