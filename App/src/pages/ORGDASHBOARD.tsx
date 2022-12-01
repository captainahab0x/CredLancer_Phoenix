import React from "react";
import { FunctionComponent, useCallback } from "react";
// import RectangleComponent from "../components/RectangleComponent.js";
import "./ORGDASHBOARD.css";

const ORGDASHBOARD: FunctionComponent = () => {
  const onADDText2Click = useCallback(() => {
    // Please sync "ORG - ADD MEMBER/Assign to ORG" to the project
  }, []);

  const onSwords1ImageClick = useCallback(() => {
    // Please sync "ORG - Review Task" to the project
  }, []);

  return (
    <div className="org-dashboard-div">
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
        <div className="add-div2" onClick={onADDText2Click}>
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
        onClick={onSwords1ImageClick}
      />
      <img className="swords-2-icon" alt="" src="../swords-2@1x.png" />
      <img className="swords-3-icon" alt="" src="../swords-3@1x.png" />
      <img className="group-icon13" alt="" src="../group-280@1x.png" />
      <img className="swords-3-2-icon" alt="" src="../swords3-2@1x.png" />
      {/* <RectangleComponent /> */}
      <button className="badge-you-members">Badge your members</button>
      <div className="create-quest-div">Create Quest</div>
    </div>
  );
};

export default ORGDASHBOARD;
