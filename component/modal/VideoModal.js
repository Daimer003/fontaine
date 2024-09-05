'use client'
import { useFontaineContext } from '@/context/FontainerContext';
import React from 'react'
import { Modal } from 'react-bootstrap'

const VideoModal = () => {
    const {
        showVideo,
        handleVideoClose,
    } = useFontaineContext()
    const embedUrl = "https://www.youtube.com/embed/cRfyO-BKCFc?si=OqhRjoupxP0AHZIv";
    return (
        <Modal show={showVideo} onHide={handleVideoClose} size='lg' centered className="modal-video" id="LKQIY6EGFR9TU">
            <Modal.Header className='vidoe-modal-header' closeButton></Modal.Header>
            <Modal.Body className="modal-video-body">
                <div className="modal-video-inner" id="modal-video-inner-LKQIY6EGFR9TU" >
                    <div className="modal-video-movie-wrap">
                        <iframe
                            className='video-modal-iframe'
                            src={embedUrl}
                            allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
                            llowFullScreen
                        />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default VideoModal

