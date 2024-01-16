const DATA = [
  {
    id: 0,
    email: "test@gmail.com",
    password: "123456",
  },
];

export function getAll() {
  return DATA;
}

export function findById(id) {
  return DATA.find((event) => event.id === id);
}

export function findByEmail(email) {
  return DATA.find((event) => event.email === email);
}

export function updatePassword({ email, oldPassword, newPassword }) {
  let data;
  for (const user of DATA) {
    if (user.email === email || user.password === oldPassword) {
      user.password = newPassword;
    }
  }

  return data;
}
