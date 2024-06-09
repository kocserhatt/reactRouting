import { useParams } from 'react-router-dom';
import { NotDetails } from './detailssnot';

export const PostsDetails = () => {
    const { id } = useParams();
    return (
        <div>
            details - {id}
        </div>
    )
}
