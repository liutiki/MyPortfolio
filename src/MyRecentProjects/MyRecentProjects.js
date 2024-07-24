import video from './video/video.mp4';
import './Projects.css';
import { useTranslation } from 'react-i18next';

function MyRecentProjects (){

    const {t}=useTranslation()

return(
    <div className="spaPosition">
    <div className="videoPosition">
                <video className="video"
                src={video}
                controls loop
                >
                </video>
           
    </div>

    <div className="masPosition">
        <p className="My">{t('New site')}</p>
        <p className="Site">{t("Massage Spa Salon")}</p>
        <button className="btn-spa"><a className="aSpa"href="https://luminous-cheesecake-7bfe2a.netlify.app" target="_blank" rel="noreferrer">{t('Watch the project')}</a></button>
    </div>
    </div>
)
}

export default MyRecentProjects;