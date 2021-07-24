import React, { useState } from 'react'
import FullPageLoader from '../../../../components/Loader/FullPageLoader';
import "./SIRegisterStyles.scss";

const SIRegisterBuildClubScreen = () => {
    const [buildStatusMessage, setBuildStatusMessage] = useState('Setting up club app.');
    const [buildStatusSubMessage, setBuildStatusSubMessage] = useState('Applying your brand and theme settings');
    return (
        <FullPageLoader message={buildStatusMessage} subMessage={buildStatusSubMessage}/>
    )
}

export default SIRegisterBuildClubScreen
