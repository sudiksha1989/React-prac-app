export default {
    tree: {
        base: {
            listStyle: 'none',
            margin: 0,
            padding: 0,
            fontFamily: 'lucida grande ,tahoma,verdana,arial,sans-serif',
            fontSize: '10px'
        },
        node: {
            base: {
                position: 'relative'
            },
            link: {
                cursor: 'pointer',
                position: 'relative',
                padding: '0px 5px',
                display: 'block'
            },
            activeLink: {
                color: '#396A9E'
            },
            toggle: {
                base: {
                    position: 'relative',
                    display: 'inline-block',
                    verticalAlign: 'top',
                    marginLeft: '-5px',
                    height: '18px',
                    width: '24px'
                },
                wrapper: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    margin: '-7px 0 0 -7px',
                    height: '14px'
                },
                height: 14,
                width: 14,
                arrow: {
                    fontSize: '18px'
                }
            },
            header: {
                base: {
                    display: 'inline-block',
                    verticalAlign: 'top',
                },
                connector: {
                    width: '2px',
                    height: '12px',
                    borderLeft: 'solid 2px black',
                    borderBottom: 'solid 2px black',
                    position: 'absolute',
                    top: '0px',
                    left: '-21px'
                },
                title: {
                    lineHeight: '18px',
                    verticalAlign: 'middle'
                },
                showdata:{
                    fontSize:'11px',
                    top: '-2px',
                    position: 'relative',
    
                }
            },
            subtree: {
                listStyle: 'none',
                paddingLeft: '19px',
                marginTop:'-4px'
            },
            loading: {
                color: '#E2C089'
            }
        }
    }
};
