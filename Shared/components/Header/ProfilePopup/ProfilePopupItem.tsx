interface



interface IProps {
    set: 
}

export const ProfilePopupItem = ({set, monClickSetting}: IProps) => {
    
    return (
        <>
            <h3
                
                onClick={() => onClickSetting(index)}
                className={
                    setting === index
                        ? 'header__profile_popup-text active'
                        : 'header__profile_popup-text'
                }
            >
                {set.name}
            </h3>
        </>
    );
};
