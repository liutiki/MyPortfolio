import massage from './assets/massage.jpg';
import kmp from './assets/kmp.png';
import './Projects.css';
import { useTranslation } from 'react-i18next';

function MyRecentProjects (){

    const {t}=useTranslation()

return(
    <div className="spaPosition">
<div className="comerse-position">
<div className="massagePhotoPosition">
              <img className="massageSalon" src={kmp} alt="kmp"/>           
    </div>
<div className="masPosition">
    <p className="Site">{t("Sea Shipping")}</p>
    <button className="btn-spa"><a className="aSpa"href="https://kdsc.ru" target="_blank" rel="noreferrer">{t('Watch the project')}</a></button>
    <button className="btn-spa"><a className="aSpa"href="https://github.com/liutiki/KMP.git" target="_blank" rel="noreferrer">{t('Watch GitHub')}</a></button>
</div>
   
</div>

<div className="comerse-position">
<div className="massagePhotoPosition">
              <img className="massageSalon" src={massage} alt="massagesalon"/>           
    </div>
   
    <div className="masPosition">
        <p className="Site">{t("Massage Spa Salon")}</p>
        <button className="btn-spa"><a className="aSpa"href="https://massagesalon.netlify.app/" target="_blank" rel="noreferrer">{t('Watch the project')}</a></button>
        <button className="btn-spa"><a className="aSpa"href="https://github.com/liutiki/MassageSalon" target="_blank" rel="noreferrer">{t('Watch GitHub')}</a></button>
    </div>

    

</div>
    </div>
)
}

export default MyRecentProjects;