import Photo from './Projects/Scrinshots/Julia-photo.png';



function MyPhoto  () {
return(

<div className='frontend'>
<div className='Hello'>
<h3 className='Name'>Hi, My name is</h3>
<h3 className='Julia'>Khakimova Julia</h3>
<h3 className='Front'>Front-end developer</h3>
<button className="button-contact" onClick={() => window.open('https://t.me/JuliaKhakimova', '_blank')}>Contact me</button>
</div>
<img className="Myphoto" src={Photo} alt="myphoto"/>



</div>

)
}

export default MyPhoto;