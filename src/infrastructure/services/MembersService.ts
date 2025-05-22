import { fetchMembersFailure, fetchMembersSuccess } from '../../app/actions/MembersActions';
import { store } from '../../app/store/store';
import { IMember } from '../../domain/entities/members.entities';

export  const MEMBERS_PER_PAGE = 6;

export const fetchMembers = async (page: number) => {
  try {
    const response = await fetch('/data/members.json');
    const allMembers: IMember[] = await response.json();

    const total = allMembers.length;
    const totalPages = Math.ceil(total / MEMBERS_PER_PAGE);
    
    const startIndex = (page - 1) * MEMBERS_PER_PAGE;
    const endIndex = startIndex + MEMBERS_PER_PAGE;

    const paginatedMembers = allMembers.slice(startIndex, endIndex);

    store.dispatch(fetchMembersSuccess(paginatedMembers, {
        page,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      }));
  } catch (error: any) {
    store.dispatch(fetchMembersFailure(error));
  }
};