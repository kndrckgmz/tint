const SocketGame = ({ data }) => {

    return (
        <div>
            Online game {data}
        </div>
    )
}

export const getServerSideProps = async (context) => {

    return {
        props: {
            data: context.params.id
        }
    }
}

export default SocketGame;