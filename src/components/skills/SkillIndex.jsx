import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import SkillContext from '../../context/SkillContext';

export const SkillIndex = () => {

    const {skills, getSkills, deleteSkill} = useContext(SkillContext);

    useEffect(() => {
        getSkills();
    }, []);

    return (
    <div className='mt-5'>
        <div className='d-flex justify-content-end'>
            <Link to='/skills/create' className='btn btn-success'>Add new skill</Link>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Slug</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {skills.map((skill) => {
                    return(
                        <tr key={skill.id}>
                            <td>{skill.name}</td>
                            <td>{skill.slug}</td>
                            <td>
                                <Link to={`/skills/edit/${skill.id}`} className='btn btn-primary btn-sm'>Edit</Link>
                                <button onClick={() => deleteSkill(skill.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
    )
}
