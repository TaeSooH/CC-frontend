import React from 'react'

const RankUser = () => {
  return (
    <div className='Rank_user_box'>
        <span className='User_rank'>랭킹</span>
        <img className='User_profile_image' src='https://cdn-icons.flaticon.com/png/128/3106/premium/3106921.png?token=exp=1660803868~hmac=2455263e174640b47800c7c899d9c335' />
        <p className='User_name'>유저 이름</p>
        <span className='User_id'>유저 아이디</span>
        <div>
          <span className='User_total_commit'>전체 커밋 수 :</span>
          <span className='User_total_commit_num'>0</span>
        </div>
        <span className='User_github_address'>유저 깃허브 주소</span>
    </div>
  )
}

export default RankUser