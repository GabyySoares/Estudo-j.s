const person = {
    firstName: 'Mosh',
    lastName: 'Hemedani',
    
    // getter para retornar o nome completo da pessoa
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  
    // setter para definir o nome completo da pessoa
    set fullName(value) {
      const parts = value.split(' ');
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  };
  
  // definindo o nome completo da pessoa usando o setter
  person.fullName = 'John Doe';
  
  // acessando o nome completo da pessoa usando o getter
  console.log(person.fullName);
  
