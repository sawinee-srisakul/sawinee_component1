import '../styles/CourseDetailPage.css';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import courses from '../data/courses';
import Modal from 'react-modal';
import Header from '../components/Header'; // Correct relative path
import Footer from '../components/Footer'; // Correct relative path

function CourseDetailPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract course ID from URL
  const queryParams = new URLSearchParams(location.search);
  const courseId = parseInt(queryParams.get('id'), 10) || 0;

  // Find the course based on ID
  const course = courses.find((item) => item.id === courseId);

  // Modal state management
  const [isEnrollModalOpen, setEnrollModalOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const toggleEnrollModal = () => {
    setEnrollModalOpen(!isEnrollModalOpen);
    setIsConfirmed(false); // Reset confirmation when closing the modal
  };

  const confirmEnrollment = () => {
    setIsConfirmed(true);
  };

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex-grow'>
        <fieldset className='login-container card'>
          {course ? (
            <div className='mt-4 sm:mt-8 md:mt-12 lg:mt-18  p-4'>
              <h1 className='mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl'>
                {course.title}
              </h1>
              <img
                src={course.image}
                alt={course.title}
                className='w-full max-w-full h-48 object-cover mb-4 rounded'
              />
              <div className='space-y-6'>
                <div className='space-y-6'>
                  <h3 className='text-3xl font-bold dark:text-white mb-4'>
                    {course.description}
                  </h3>
                  <p className='course-detail'>{course.detail}</p>
                  <h3 className='text-xl font-semibold'>Modules:</h3>
                  <ul className='list-disc pl-6 space-y-2'>
                    {course.modules.map((module, index) => (
                      <li key={index} className='course-module'>
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='app-buttons flex justify-end mt-4'>
                  <button
                    className='px-4 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-all duration-300 ease-in-out'
                    onClick={toggleEnrollModal}
                  >
                    Enroll Now
                  </button>
                  <button
                    className='ml-4 px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300'
                    onClick={handleButtonClick}
                  >
                    Back to Home Page
                  </button>
                </div>
              </div>

              {/* Enrollment Modal */}
              <Modal
                isOpen={isEnrollModalOpen}
                onRequestClose={toggleEnrollModal}
                contentLabel='Enroll'
                className='modal'
                overlayClassName='modal-overlay'
              >
                <div className='bg-white p-6 rounded-lg w-full max-w-sm mx-auto'>
                  {isConfirmed ? (
                    // Enrollment confirmation message
                    <div className='text-center'>
                      <h2 className='text-2xl font-semibold text-green-600 mb-4'>
                        Confirmed your enrollment
                      </h2>
                      <button
                        className='btn btn-primary bg-blue-500 text-white px-4 py-2 rounded'
                        onClick={toggleEnrollModal}
                      >
                        Close
                      </button>
                    </div>
                  ) : (
                    // Enrollment confirmation prompt
                    <>
                      <h2 className='text-2xl font-semibold mb-4'>
                        Enroll in {course.title}
                      </h2>
                      <p className='mb-4'>
                        Are you sure you want to enroll in this course?
                      </p>
                      <div className='flex justify-between'>
                        <button
                          className='btn btn-success bg-green-500 text-white px-4 py-2 rounded'
                          onClick={confirmEnrollment}
                        >
                          Confirm Enrollment
                        </button>
                        <button
                          className='btn btn-secondary bg-gray-500 text-white px-4 py-2 rounded'
                          onClick={toggleEnrollModal}
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </Modal>
            </div>
          ) : (
            <p>Course not found</p>
          )}
        </fieldset>
      </div>

      <Footer />
    </div>
  );
}

export default CourseDetailPage;
