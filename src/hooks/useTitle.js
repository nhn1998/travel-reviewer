import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title}-Travel Reviewer`
    },[title])
}
export default useTitle;