import { Usuario } from './Usuario'

describe('Usuario Class', () => {
  let usuario: Usuario

  beforeEach(() => {
    usuario = new Usuario('Brandon', 'brandargel@gmail.com', 'Developer', 5, true)
  })

  test('should return the correct name', () => {
    expect(usuario.getName()).toBe('Brandon')
  })

  test('should return the correct profile', () => {
    const expectedProfile = 'El usuario es Brandon, se dedica a Developer y tiene 5 años de experiencia.'
    expect(usuario.getProfile()).toBe(expectedProfile)
  })

  test('should return the correct active status', () => {
    expect(usuario.isStillActive()).toBe(true)
  })

  test('should return false for inactive user', () => {
    usuario = new Usuario('Brandon', 'brandargel@gmail.com', 'Developer', 5, false)
    expect(usuario.isStillActive()).toBe(false)
  })
})
