export class UserService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Menu'];

    setToActive(id: number) {
        console.log('a')
        this.activeUsers.push(this.inactiveUsers[id])
        this.inactiveUsers.splice(id, 1);
    }

    setToInactive(id: number) {
        console.log('b')
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1); 
    }
}