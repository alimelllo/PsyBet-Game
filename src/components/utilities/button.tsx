import classnames from 'classnames';

export default (props : any) => {

    const { size = 'md' , theme = 'default',type = 'default' } : {
        size : 'sm' | 'md' | 'lg' ,
        theme : 'default' | 'link',
        type: 'default' | 'classic'
    } = props; 


    const sizes : any = {
        md : 'desktop:text-lg text-sm rounded-md  boxshadow-lg desktop:px-12 px-4 py-2 shadow-xl font-semibold'
    }

    const themes : any = {
        default : 'bg-gradient-to-tr from-red-100 to-green-100 hover:from-red-200 hover:to-red-300'
    }

    const types : any = {
        default : `rounded-full`,
        classic : `rounded-md`,
    }

    return <button {...props} className={classnames("text-white font-poppins transition duration-300 transition-all", sizes[size] , themes[theme], types[type], props.className)}/>
}