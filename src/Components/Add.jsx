import React,{useState} from 'react'
import {Modal,Button,Form,FloatingLabel} from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';



function Add({setUploadVideoResponse}) {
    const [uploadVideo,setUploadVideo] = useState({
        caption:'',imageUrl:'',youtubeLink:''

    })
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setUploadVideo({...uploadVideo,caption:'',imageUrl:'',youtubeLink:''})
    }
    const handleShow = () => setShow(true);

    // <iframe width="1010" height="568" src="https://www.youtube.com/embed/BYV4DBo5TpM" title="Form Handling in React JS | Single input field Vs Multiple input field | MALAYALAM | #reactjs  #jsx" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    const getYoutubeEmbeddedLink =(link) =>{
        if(link.includes("v=")){
            let videoId = link.split("v=")[1].slice(0,11)
            setUploadVideo({...uploadVideo,youtubeLink:`https://www.youtube.com/embed/${videoId}`})

        }else{
            setUploadVideo({...uploadVideo,youtubeLink:""})
            alert("input proper youtube link!!")
        }
    }
    console.log(uploadVideo);


    // image link https://th.bing.com/th/id/OIP.rdDJbj2fgaC3NmjAfF_FlwHaHa?rs=1&pid=ImgDetMain
    //utube link  https://www.youtube.com/watch?v=VZC8b7W8H7I

    const handleUpload= async() =>{
        const {caption,imageUrl,youtubeLink} =uploadVideo
        if(caption && imageUrl && youtubeLink) {
            // alert("proceed to store video")
            const result = await uploadVideoAPI(uploadVideo)
            console.log(result);
            if(result.status>=200 && result.status<300){
                alert(`Video '${result.data.caption}' successfully uploaded!!!`)
                setUploadVideoResponse(result.data)
                handleClose()
            }else{
                alert("API Call failed... please try after sometime time")
            }
        }else{
            alert("please fill the form completely")
        }
    }
  return (
  <>
        <div className='d-flex align-items-center'>
            <h5 style={{height:'30px'}}>Uploaded A Video</h5>
            <button  onClick={handleShow} className='btn btn-info ms-2 rounded'><i class="fa-solid fa-plus"></i></button>
        </div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Please fill the  following details !!!</p>
      <div className='border rounded border-secondary p-3'>
            <FloatingLabel
            controlId="floatingInputCapion"
            label="Video Caption"
            className="mb-3"
          >
            <Form.Control value={uploadVideo.caption} onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})} type="text" placeholder="Video Caption" />
          </FloatingLabel>
          <FloatingLabel
        controlId="floatingInputImg"
        label="Img Url"
        className="mb-3"
      >
        <Form.Control value={uploadVideo.imageUrl}  onChange={e=>setUploadVideo({...uploadVideo,imageUrl:e.target.value})} type="text" placeholder="Img Url" />
      </FloatingLabel>
      <FloatingLabel
            controlId="floatingInputLink"
            label="Youtube Video Link"
            className="mb-3"
          >
            <Form.Control value={uploadVideo.youtubeLink} onChange={e=>getYoutubeEmbeddedLink(e.target.value)} type="text" placeholder="Youtube Video Link" />
          </FloatingLabel>
      
       
      </div>
        


        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className="btn btn-info">Upload</Button>
        </Modal.Footer>
      </Modal>
  </>
  )
}

export default Add
