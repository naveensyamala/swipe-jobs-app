
export const fetchJobInfo = async() => {
    const res = await fetch(`https://test.swipejobs.com/api/worker/${workerId}/matches`)  
    const data = await res.json()
    console.info(data)
    if(data!= null && data.length!== 0){
      setCurrentJob(data[0])
    }
    return data
  }