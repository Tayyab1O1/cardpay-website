// components/YouTubeVideo.js
// import { useState } from 'react';

// const YouTubeVideo = ({ videoId }) => {
//   const [showModal, setShowModal] = useState(false);

//   const handleOpenModal = () => {
//     setShowModal(true);
//     console.log(showModal);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="my-4">
//       <a
//         onClick={handleOpenModal}
//         className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Play Video
//       </a>

//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-1000">
//           <div className="modal bg-black">
//             <button
//               onClick={handleCloseModal}
//               className="modal-close absolute top-0 right-0 mt-4 mr-4"
//             >
//               <svg
//                 className="fill-current text-gray-700 hover:text-gray-900"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="18"
//                 height="18"
//                 viewBox="0 0 18 18"
//                 role="img"
//                 aria-label="Close"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M9.293 9l4.146 4.146a.5.5 0 1 1-.708.708L8.586 9l-4.147 4.146a.5.5 0 0 1-.708-.708L7.88 9 3.733 4.854a.5.5 0 1 1 .708-.708L9.293 8l4.146-4.146a.5.5 0 0 1 .708.708L10.707 9l4.146 4.146a.5.5 0 0 1-.708.708L9 9.707l-4.146 4.146a.5.5 0 0 1-.708-.708L8.293 9z"
//                 />
//               </svg>
//             </button>
//             <div className="modal-body">
//               <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
//                 <iframe
//                   className="absolute top-0 left-0 w-full h-full"
//                   title="YouTube Video Player"
//                   src={`https://www.youtube.com/embed/tOpx-aOqqJk?autoplay=1`}
//                   frameBorder="0"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default YouTubeVideo;


import React from 'react';

const YouTubeVideo = ({ closeModal }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded text-black relative">
                <div className='w-screen text-right px-4'>
                    <a
                        className="text-2xl text-gray-500 font-light font-serif "
                        onClick={closeModal}
                    >
                        X
                    </a>
                </div>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/tOpx-aOqqJk?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className='w-screen'
                ></iframe>
            </div>
        </div>

    );
};

export default YouTubeVideo;


// {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/tOpx-aOqqJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}