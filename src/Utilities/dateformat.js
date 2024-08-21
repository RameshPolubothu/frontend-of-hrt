export const formatdate = (createdDate) =>{
    const date = new Date(createdDate);
    return date.toLocaleDateString('en-US',{
        year:'numeric',
        month:'long',
        day:'numeric'
    });
}