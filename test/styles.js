
export default {
    container: {
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#DCDCDC'
    },
    photoComponent: {
        backgroundColor: '#fff',
        alignItems: 'center',
        width: 180,
        paddingTop: 10,
        paddingBottom: 10,
        shadowOpacity: 0.75,
        shadowRadius: 2,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { height: 0, width: 0 },
    },
    photoContents: {
        flexDirection: 'row',
        marginRight: -55,
    },
    photoInfo: {
        marginRight: 10,
    },
    cardsContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
    popupDialogContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        top: 0,
        left:0,
        position: 'absolute',
        zIndex: 1,
    },
    popupDialogContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    popupCloseBtn: {
        backgroundColor: '#DCDCDC',
        width:  70,
        height: 35,
        padding: 10,
        marginRight: '-61%'
    },
    popupContents: {
        flexDirection: 'row',
        marginRight: '-56%',
        marginBottom: 20,
        paddingTop: 10,
    },
    popUpText: { 
        color: '#FFF'
    }
  };
  