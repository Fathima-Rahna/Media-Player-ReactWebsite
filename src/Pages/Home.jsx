import React from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import {Link} from 'react-router-dom'
import Category from '../Components/Category'
import { useState } from 'react'


function Home() {
  const [removeCategoryVideoResponse,setRemoveCategoryVideoResponse] = useState("")
  const [uploadVideoResponse,setUploadVideoResponse] = useState("")
  return (
   <>
      <div className='container mt-5 d-flex justify-content-between'>
        <Add setUploadVideoResponse={setUploadVideoResponse} />
        <Link to={'/Watch'}>VIew History</Link>
      </div>
      <div className="container-fluid mt-5 mb-5 row">
        <div className="col-lg-6">
          <h3  style={{height:'100px'}} >All Videos</h3>
          <View  uploadVideoResponse={uploadVideoResponse} setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse}  />
        </div>
        <div className="col-lg-6">
          
            <Category removeCategoryVideoResponse={removeCategoryVideoResponse} />

          
        </div>
      </div>
   </>
  )
}

export default Home