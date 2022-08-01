import React from "react";

const ProfileDataRow = ({ profile }) => {
  // DO NOT DELETE the data-cy attributes. Removing them may result in less evaluation marks

  return (
    
    <tr data-cy={`profile-wrapper-${profile.e.id}`}>
      <td data-cy="profile-id">{profile.e.id}</td>
      <td data-cy="profile-image"><img src={profile.e.profile_pic} alt="" /></td>
      <td data-cy="profile-first-name">{profile.e.first_name}</td>
      <td data-cy="profile-last-name">{profile.e.last_name}</td>
      <td data-cy="profile-email">{profile.e.email}</td>
      <td data-cy="profile-gender">{profile.e.gender}</td>
      <td data-cy="profile-country">{profile.e.country}</td>
    </tr>
  );
};

export default ProfileDataRow;
