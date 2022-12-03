import React from 'react';
import './OrgDashboardBody.css';
export default function OrgDashboardBody () {
  return (
    <div className='main-body'>
      <div className='console-view'>
        <div className='console-header'>
          <div className='org-bio'>BIO</div>
          <div className='org-edit'>EDIT</div>
        </div>
        <div className='console-body'>
          <div className='org-view-wrapper'>
            <div className='org-view'>
              <div className='org-name'>
                <span className='org-name-content'>
                  BitDAO
                </span>
              </div>
              <div className='org-view-details'>
                <div className='org-logo'>
                  <img height="128" width="128" alt='org-logo' src='./IMG_1757_1.png' />
                </div>
                <div className='org-details'>
                  <div className='org-name-wrapper'>
                    <span className='org-type'>INDUSTRY</span>
                  </div>
                  <div className='org-desc'>
                    <p className='org-desc-text'>
                      Creating In-game graphics, audio engineering, VR 
                    </p>
                  </div>
                </div>
              </div>
              <div className='join-org-btn'>
                <div>
                  <button className='connect-discord'>
                    <span>Connect to Discord</span>
                    &nbsp;
                    <i><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.79281 6.50001L6.14637 9.14645L6.85348 9.85356L10.707 6.00001L6.85348 2.14645L6.14637 2.85356L8.79283 5.50001H2V6.50001H8.79281Z" fill="#E8EDF6"></path></svg></i>
                  </button>
                </div>
              </div>
            </div>
            <div className='org-badge'>
              <div className='org-badge-img-wrapper'>
                <img height="128" width="128" alt='org-badge' src='./Knight-4_1.png' />
              </div>
              <div className='badge-your-member-wrapper'>
                <div>
                  <button className='badge-your-member'>
                    Badge your member
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='org-banner'>
            <div className='board-wrapper twitter-board'>
              <div className='board-title'>
                43.5k
              </div>
              <div className='board-desc'>
                Twitter followers
              </div>
            </div>
            <div className='board-wrapper discord-board'>
              <div className='board-title'>
                  8656
                </div>
                <div className='board-desc'>
                  Discord Members
                </div>
            </div>
            <div className='board-wrapper holder-board'>
              <div className='board-title'>
                  19K
                </div>
                <div className='board-desc'>
                  Holders
                </div>
            </div>
            <div className='board-wrapper txs-board'>
              <div className='board-title'>
                  50.5k
                </div>
                <div className='board-desc'>
                  Txs
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='org-bucket-details'>
        <div className='org-member-wrapper'>
          <div className='org-member-header'>
            <div className='org-title'>
              Members
            </div>
            <div>X</div>
          </div>
          <div className='org-member-body'>
            <div className='member-profile-wrapper'>
              <div className='member-profile'>
                <img alt='member profile' height='128' width='128' src='./IMG_1756_1.png' />
              </div>
              <div className='member-name'>Robby</div>
            </div>
            <div className='member-profile-wrapper'>
              <div className='member-profile'>
                <img height='128' width='128' alt='member profile' src='./IMG_1755_1.png' />
              </div>
              <div className='member-name'>Haus</div>
            </div>
            <div className='member-profile-wrapper'>
              <div className='member-profile'>
                <img height='128' width='128' alt='member profile' src='./IMG_1818_1.png' />
              </div>
              <div className='member-name'>Jane</div>
            </div>
          </div>
        </div>
        <div className='org-member-wrapper'>
          <div className='org-member-header'>
            <div className='org-title'>
              Roles
            </div>
            <div>X</div>
          </div>
          <div className='org-member-body'>
            <div className='member-profile-wrapper'>
              <div className='role-profile'>
                <img alt='member profile' height='64' width='64' src='./role1.png' />
              </div>
              <div className='member-name'>Developer</div>
            </div>
            <div className='member-profile-wrapper'>
              <div className='role-profile'>
                <img height='64' width='64' alt='member profile' src='./role2.png' />
              </div>
              <div className='member-name'>Operations</div>
            </div>
            <div className='member-profile-wrapper'>
              <div className='role-profile'>
                <img height='64' width='64' alt='member profile' src='./role3.png' />
              </div>
              <div className='member-name'>Designer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{/* <div className="org-dashboard-div">
<img className="ellipse-icon" alt="" />
<img className="ellipse-icon1" alt="" />
<img className="img-1752-1-icon" alt="" src="../img-1752-1@2x.png" />
<div className="credquest-div">CredQuest</div>
<img className="group-icon" alt="" src="../group-185.svg" />
<div className="group-div">
  <div className="group-div1">
    <div className="group-div1">
      <div className="rectangle-div" />
      <img
        className="rectangle-icon"
        alt=""
        src="../rectangle-5519.svg"
      />
      <div className="group-div3">
        <img className="ellipse-icon2" alt="" src="../ellipse-52.svg" />
        <div className="group-div4">
          <img className="group-icon1" alt="" src="../group-186.svg" />
          <div className="role-div">ROLE</div>
        </div>
      </div>
      <div className="group-div5">
        <img className="ellipse-icon3" alt="" src="../ellipse-521.svg" />
        <div className="group-div6">
          <img className="group-icon2" alt="" src="../group-1861.svg" />
          <div className="role-div">ROLE</div>
        </div>
      </div>
      <div className="group-div7">
        <img className="ellipse-icon4" alt="" src="../ellipse-522.svg" />
        <div className="group-div8">
          <img className="group-icon3" alt="" src="../group-1862.svg" />
          <div className="role-div">ROLE</div>
        </div>
      </div>
      <img className="group-icon4" alt="" src="../group-5.svg" />
      <div className="x-close-div">X CLOSE</div>
    </div>
    <div className="roles-div">Roles</div>
    <div className="add-div">+ADD |</div>
  </div>
</div>
<div className="group-div9">
  <div className="group-div10">
    <div className="rectangle-div1" />
    <img
      className="rectangle-icon1"
      alt=""
      src="../rectangle-55191.svg"
    />
    <div className="x-close-div1">X CLOSE</div>
    <div className="group-div11">
      <img className="ellipse-icon5" alt="" src="../ellipse-523.svg" />
      <div className="group-div12">
        <img className="group-icon5" alt="" src="../group-1863.svg" />
        <div className="complete-div">COMPLETE</div>
      </div>
    </div>
    <div className="group-div13">
      <img className="ellipse-icon5" alt="" src="../ellipse-524.svg" />
      <div className="group-div12">
        <img className="group-icon6" alt="" src="../group-1864.svg" />
        <div className="complete-div">COMPLETE</div>
      </div>
    </div>
    <div className="group-div15">
      <img className="ellipse-icon5" alt="" src="../ellipse-525.svg" />
      <div className="group-div12">
        <img className="group-icon6" alt="" src="../group-1865.svg" />
        <div className="open-div">OPEN</div>
      </div>
    </div>
    <img className="group-icon8" alt="" src="../group-51.svg" />
    <div className="add-div1">+ADD |</div>
  </div>
  <div className="quests-div">Quests</div>
</div>
<div className="group-div17">
  <div className="group-div18">
    <div className="rectangle-div2" />
    <img
      className="rectangle-icon2"
      alt=""
      src="../rectangle-55192.svg"
    />
    <button className="rectangle-button" />
    <img className="rectangle-icon3" alt="" src="../rectangle-5520.svg" />
  </div>
  <div className="bitdao-div">BitDAO</div>
  <div className="bio-div">BIO</div>
  <img className="ellipse-icon8" alt="" src="../ellipse-51.svg" />
  <div className="edit-div">EDIT</div>
  <div className="connect-discord-div">Connect Discord</div>
  <div className="add-to-favorites">Add to favorites</div>
  <textarea
    className="textblock-textarea"
    placeholder="INDUSTRY"
    defaultValue="Creating In-game graphics, audio engineering, VR "
  />
  <img className="rectangle-icon4" alt="" src="../rectangle-5526.svg" />
  <div className="k-div">50.5k</div>
  <div className="k-div1">43,5k</div>
  <div className="div">8657</div>
  <div className="k-div2">19k</div>
  <div className="twitter-followers-div">
    <p className="twitter-p">{`Twitter `}</p>
    <p className="followers-p">Followers</p>
  </div>
  <div className="discord-members-div">
    <p className="twitter-p">Discord</p>
    <p className="followers-p">Members</p>
  </div>
  <div className="holders-div">Holders</div>
  <div className="txs-div">Txs</div>
</div>
<div className="text-div">
  <p className="followers-p">&nbsp;</p>
</div>
<div className="group-div19">
  <div className="group-div20">
    <div className="group-div21">
      <div className="group-div21">
        <div className="rectangle-div3" />
        <img
          className="rectangle-icon5"
          alt=""
          src="../rectangle-55193.svg"
        />
        <div className="group-div23">
          <img
            className="ellipse-icon9"
            alt=""
            src="../ellipse-526.svg"
          />
          <div className="group-div24">
            <img className="group-icon9" alt="" src="../group-1866.svg" />
            <div className="open-div">GAME 7</div>
          </div>
        </div>
        <div className="group-div25">
          <img
            className="ellipse-icon5"
            alt=""
            src="../ellipse-527.svg"
          />
          <div className="group-div26">
            <img
              className="group-icon10"
              alt=""
              src="../group-1867.svg"
            />
            <div className="open-div">JANE WOW</div>
          </div>
        </div>
        <img className="group-icon11" alt="" src="../group-52.svg" />
        <div className="group-div27">
          <div className="group-div28">
            <div className="group-div28">
              <div className="group-div28">
                <img
                  className="ellipse-icon11"
                  alt=""
                  src="../ellipse-528.svg"
                />
                <div className="group-div31">
                  <img
                    className="group-icon12"
                    alt=""
                    src="../group-1868.svg"
                  />
                  <div className="sozuhaus-div">SOZUHAUS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="members-div">Members</div>
  </div>
  <div className="x-close-div2">X CLOSE</div>
  <div className="add-div2">
    +ADD |
  </div>
</div>
<img className="img-1755-1-icon" alt="" src="../img-1755-1@1x.png" />
<img className="asset-1-2" alt="" src="../asset-1-2.svg" />
<img className="img-1756-1-icon" alt="" src="../img-1756-1@2x.png" />
<img className="img-1757-1-icon" alt="" src="../img-1757-1@1x.png" />
<img className="image-icon" alt="" src="../image.svg" />
<img className="image-icon1" alt="" src="../image1.svg" />
<img className="image-icon2" alt="" src="../image2.svg" />
<img className="image-icon3" alt="" src="../image3.svg" />
<img className="image-icon4" alt="" src="../image4.svg" />
<img className="image-icon5" alt="" src="../image5.svg" />
<img className="vector-icon" alt="" src="../vector-336.svg" />
<img className="img-1818-1-icon" alt="" src="../img-1818-1@1x.png" />
<img
  className="swords-1-icon"
  alt=""
  src="../swords-1@1x.png"
/>
<img className="swords-2-icon" alt="" src="../swords-2@1x.png" />
<img className="swords-3-icon" alt="" src="../swords-3@1x.png" />
<img className="group-icon13" alt="" src="../group-280@1x.png" />
<img className="swords-3-2-icon" alt="" src="../swords3-2@1x.png" />
<RectangleComponent />
<button className="badge-you-members">Badge your members</button>
<div className="create-quest-div">Create Quest</div>
</div> */}