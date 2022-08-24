import LayoutHeader from "./layoutHeader";
import LayoutFooter from './layoutFooter';
import Style from './style';

export interface AuxProps  { 
    children: React.ReactNode
}

const Layout = ( {children} :AuxProps  ) => {

    return(
        <Style>
            <div className="flex flex-col w-full">
            <LayoutHeader/>
                <div>
                    {children}
                </div>
            <LayoutFooter/>
            </div>
        </Style>
    )
}

export default Layout;