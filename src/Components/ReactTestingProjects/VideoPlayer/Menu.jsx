export function Menu({onSelectedVideo,videoData}){
    return(
        <form onClick={(e)=>onSelectedVideo(e.target.value)} className="form-group">
            {videoData.map((datagot,id)=>(
               
                <div className="form-check form-check-inline" key={id}>
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={datagot}/>
  <label className="form-check-label" htmlFor="inlineRadio1">{datagot}</label>
</div>
            ))}
        </form>
    )
}