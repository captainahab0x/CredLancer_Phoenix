import React from 'react';
import './OrgDashboardBody.css';
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { NFTStorage  } from 'nft.storage';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color: 'black !important'
  },
};

// Paste your NFT.Storage API key into the quotes:
const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGU1OThEMjgzOTVGMDA4MDhiYkNkRDM5ODEyQWVFNkIyZTAwNjIxMTEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3MDA4OTI0ODY2MSwibmFtZSI6IlRva2VuX2Zvcl9UUEdfSEhfcHJvamVjdCJ9.f_aVkeW0DZIaLUqzFZlj65HknStjANZimD5rJq68Myc';


Modal.setAppElement('#modal-element');

async function storeInIPFS ({ name, description, image }) {
  const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

  // fetch(image).then(response => {
  //   response.blob();
  // }).then( (blob) => {
    // const imgType = image.files[0].type;
    // const imageFile = new File([blob], image, { type: imgType });
    // const metadata = await client.store({
    //   name,
    //   description,
    //   image: imageFile
    // });
  //   console.log(blob);
  // });

  // val = await uploadtoNFTstorage(NFT_Mint_JSON);
  const someData = new Blob(["hello world"]);
  const metadata = await client.storeBlob(someData);
  console.log(metadata);
}

export default function OrgDashboardBody () {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [startDate, setStartDate] = React.useState(new Date());
  const options = [
    {
      title: 'Super contributor',
      description: 'Hey, thanks for contributing and being part of our journey. We acknowledge your contribution with this contributor badge.'
    },
    {
      title: 'Pro in stack',
      description: 'Hey, mate, we are very glad to have professional like you as part of our team. We acknowledge your contribution with this pro badge.'
    },
    {
      title: 'Champion of all',
      description: 'Hey champ, thanks for single handedly managing it, we are mesmerized with your talent and super happy to be working with you. We acknowledge your contribution with this champion badge.'
    }
  ];
  const [selectedOptionIndex, setSelectedOptionIndex] = React.useState(0);
  const [lancerId, setLancerId] = React.useState('0x2C1b291B3946e06ED41FB543B18a21558eBa3d62');

  const handleSubmit = async () => {
    const badgeName = options[selectedOptionIndex].title || '';
    const badgeDescription = options[selectedOptionIndex].description || '';
    const date = startDate;
    const issuedBy = 'BitDAO';
    const image = document.getElementById('badgeImage').value;
    
    const finalDesc = badgeDescription + 'for: ' + lancerId + 'Issued By: ' + issuedBy + 'on: ' + date;
    
    fetch(image).then(response => response.blob()).then( (blob) => {
      storeInIPFS({
        name: badgeName,
        description: finalDesc,
        image: blob
      });
    });

  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedOptionIndex(e.target.value);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <>
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
                    <button className='badge-your-member' onClick={()=> setIsOpen(true)}>
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='modal-header'>
          <h2>Badge your member</h2>
          <button className='modal-close-btn' onClick={closeModal}>X</button>
        </div>
        <div className='modal-body'>
          <h6 style={{ fontFamily: 'Roboto' }} className='modal-header-font'> Badge Name</h6>
          <div className='add-badge-container'>
            <select style={{ fontFamily: 'Roboto' }} onChange={handleChange} className='badge-dropdown'>
              <option value={0}>{options[0].title}</option>
              <option value={1}>{options[1].title}</option>
              <option value={2}>{options[2].title}</option>
            </select>
          </div>
          <br />
          <br />
          <div className='badge-image-wrapper'>
            <h6 style={{ fontFamily: 'Roboto' }} className='modal-header-font'> Upload badge image</h6>
            <input type="file" id="badgeImage" name="badgeImage" accept="image/png, image/jpeg" />
          </div>

          <br />
          <br />
          <h6 style={{ fontFamily: 'Roboto' }} className='modal-header-font'>Feedback</h6>
          <textarea rows='3' style={{ fontFamily: 'Roboto' }} className='badge-description' value={options[selectedOptionIndex].description} />
          <br />
          <br />
          <h6 style={{ fontFamily: 'Roboto' }} className='modal-header-font'>Date</h6>
          <DatePicker style={{ fontFamily: 'Roboto' }} selected={startDate} onChange={(date) => setStartDate(date)} />
          <br />
          <br />
          <h6 style={{ fontFamily: 'Roboto' }} className='modal-header-font'>Lancer ID</h6>
          <input style={{ fontFamily: 'Roboto' }}  size='32' className='lancer-Id' type='text' value={lancerId} disabled />
          <br />
          <br />
          <h6 style={{ fontFamily: 'Roboto' }} className='modal-header-font'>Issued by</h6>
          <div><img height='48' width='48' alt='bitDAO' src='./IMG_1757_1.png' /></div>
          <br />
          <br />
        </div>
        <div className='modal-footer'>
          <button className='modal-footer-submit-btn' onClick={handleSubmit}>Share</button>
        </div>
      </Modal>
    </>
  );
};
