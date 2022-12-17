import { Cross, Search } from 'akar-icons';
import CloudUpload from '../../images/cloud-upload.svg';
import Drag from '../../images/drag.svg';

function DirectSubordinates() {
  return (
    <div className='card-details card col-4 me-3'>
      <div className='card-body'>
        <div className='request-fields pb-4'>
          <div className='row justify-content-between align-items-center request-fields pb-3 g-0'>
            <div className='width-auto'>
              <div className='form-label mb-1'>Details</div>
              <div className='details-header'>Direct Subordinates</div>
            </div>

            <div className='width-auto pe-0'>
              <span className='btn-secondary-small m-1'>
                <Cross className='me-1 mb-1' strokeWidth={2} size={14} />
                Cancel
              </span>
              <span className='btn-primary-outline m-1'>
                <img src={CloudUpload} alt='' className='p-1' />
                Save
              </span>
            </div>
          </div>

          <div className='row mt-3 justify-content-between'>
            <div className='row width-auto'>
              <img src={Drag} alt='' className='width-auto' />
              <div className='row width-auto col'>
                <img
                  src='images/subordinate-1.jpg'
                  alt=''
                  className='img-subordinate px-0'
                />
                <div className='width-auto pt-1'>
                  <div className='form-label m-0'>
                    347th IT and Signal Center, Zhytomyr
                  </div>
                  <div>Lieutenant General Yevhen MOISIUK</div>
                </div>
              </div>
            </div>

            <img src='images/x.svg' alt='' className='width-auto' />
          </div>

          <div className='row mt-3 justify-content-between'>
            <div className='row width-auto'>
              <img src={Drag} alt='' className='width-auto' />
              <div className='row width-auto col'>
                <img
                  src='images/subordinate-2.jpg'
                  alt=''
                  className='img-subordinate px-0'
                />
                <div className='width-auto pt-1'>
                  <div className='form-label m-0'>
                    80th Air Assault Brigade, Lviv
                  </div>
                  <div>Anatolij Serhijovych Ivanchenko</div>
                </div>
              </div>
            </div>

            <img src='images/x.svg' alt='' className='width-auto' />
          </div>

          <div className='row mt-3 justify-content-between'>
            <div className='row width-auto'>
              <img src={Drag} alt='' className='width-auto' />
              <div className='row width-auto col'>
                <img
                  src='images/subordinate-3.jpg'
                  alt=''
                  className='img-subordinate px-0'
                />
                <div className='width-auto pt-1'>
                  <div className='form-label m-0'>
                    46th Air Assault Brigade, Poltava
                  </div>
                  <div>Mykhailo Zabrodskyi</div>
                </div>
              </div>
            </div>

            <img src='images/x.svg' alt='' className='width-auto' />
          </div>

          <div className='row mt-3 justify-content-between'>
            <div className='row width-auto'>
              <img src={Drag} alt='' className='width-auto' />
              <div className='row width-auto col'>
                <img
                  src='images/subordinate-4.jpg'
                  alt=''
                  className='img-subordinate px-0'
                />
                <div className='width-auto pt-1'>
                  <div className='form-label m-0'>
                    45th Air Assault Brigade, Bolhrad
                  </div>
                  <div>Artem Havrylovych Sakhno</div>
                </div>
              </div>
            </div>

            <img src='images/x.svg' alt='' className='width-auto' />
          </div>

          <div className='row mt-3 justify-content-between'>
            <div className='row width-auto'>
              <img src={Drag} alt='' className='width-auto' />
              <div className='row width-auto col'>
                <img
                  src='images/subordinate-5.jpg'
                  alt=''
                  className='img-subordinate px-0'
                />
                <div className='width-auto pt-1'>
                  <div className='form-label m-0'>
                    23rd Tank Battalion, Velykyi Kobylyn
                  </div>
                  <div>Petro Rostyslavovych Bilous</div>
                </div>
              </div>
            </div>

            <img src='images/x.svg' alt='' className='width-auto' />
          </div>

          <div className='row mt-4 ms-3'>
            <form className='searchbar d-flex align-items-center col'>
              <Search className='ai-search' strokeWidth={2} size={14} />
              <input
                type='search'
                className='form-control'
                placeholder='Search'
                aria-label='Search'
              />
            </form>
            <span className='btn-secondary-small m-1 width-auto me-3'>
              Search
            </span>
          </div>
        </div>

        <div className='row mt-3 pb-3 request-fields g-0'>
          <div className='col'>
            <div className='form-label m-0'>Data Source</div>
            <div>DB3728</div>
          </div>
          <div className='col'>
            <div className='form-label m-0'>DB localization</div>
            <div>Frankfurt, DE</div>
          </div>
          <div className='col'>
            <div className='form-label m-0'>Last SYNC</div>
            <div>17:39</div>
          </div>
          <span className='btn-secondary-small m-1 width-auto me-3'>
            Sync now
          </span>
        </div>

        <div className='mt-3'>
          <div className='form-label m-0'>Edit History</div>

          <table className='table table-dark table-borderless bg-transparent table-convoy-history m-0'>
            <tbody>
              <tr>
                <td className='text-dark pt-1' scope='row'>
                  21.05.2022
                </td>
                <td className='text-dark pt-1'>05:10</td>
                <td className='text-secondary pt-1'>
                  Updated <a href='#'>Direct Subordinates</a> by{' '}
                  <a href='#'>Andrew Shultz</a>
                </td>
              </tr>
              <tr>
                <td className='text-dark' scope='row'>
                  20.05.2022
                </td>
                <td className='text-dark'>06:20</td>
                <td className='text-secondary'>
                  Updated <a href='#'>Assignment</a> by{' '}
                  <a href='#'>Michael Cane</a>
                </td>
              </tr>
              <tr>
                <td className='text-dark' scope='row'>
                  19.05.2022
                </td>
                <td className='text-dark'>17:25</td>
                <td className='text-secondary'>
                  Updated <a href='#'>Date of Birth</a> by{' '}
                  <a href=''>Andrew Shultz</a>
                </td>
              </tr>
              <tr>
                <td className='text-dark' scope='row'>
                  16.04.2022
                </td>
                <td className='text-dark'>06:30</td>
                <td className='text-secondary'>
                  Updated <a href='#'>Position</a>,{' '}
                  <a href='#'>Place of Birth</a>,{' '}
                  <a href='#'>Current Location</a> by <a href='#'>Lee Hoi</a>
                </td>
              </tr>
              <tr>
                <td className='text-dark' scope='row'>
                  15.04.2022
                </td>
                <td className='text-dark'>08:30</td>
                <td className='text-secondary'>
                  Updated <a href='#'>Skills</a> by{' '}
                  <a href='#'>Andrew Shultz</a>
                </td>
              </tr>
              <tr>
                <td className='text-dark' scope='row'>
                  18.01.2021
                </td>
                <td className='text-dark'>19:00</td>
                <td className='text-secondary'>
                  Updated <a href='#'>Position</a> by{' '}
                  <a href='#'>Andrew Shultz</a>
                </td>
              </tr>
              <tr>
                <td className='text-dark' scope='row'>
                  17.12.2020
                </td>
                <td className='text-dark'>15:41</td>
                <td className='text-secondary'>
                  Record created by <a href='#'>Michael Cane</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DirectSubordinates;
