export function formatStatus(status) {
    let formatted;
    switch(status) {
        case 'to_do': 
            formatted = 'Pendiente';
        break;
        case 'in_progress':
            formatted = 'En proceso';
        break;
        case 'completed':
            formatted = 'Completado';
        break;
        default:
            formatted = 'Status';
        break;
    }
    
    return formatted;
}

export function countTasksByStatus(status, arr) {
    return arr.filter(item => item.status === status).length;
}