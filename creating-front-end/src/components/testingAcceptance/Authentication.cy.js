import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Signup from '../Signup';
import { MemoryRouter } from 'react-router-dom';
import { auth } from '../../firebase/Firebase';

describe('User authentication', () => {
    it('should load the Signup page', () => {
      cy.visit('/signup');
      cy.contains('Create an account').should('be.visible');
      cy.get('form').should('exist');
    });
  
    it('should display error message if email is not entered', () => {
      cy.visit('/signup');
      cy.get('input[name="password"]').type('password123');
      cy.get('input[name="confirmPassword"]').type('password123');
      cy.contains('button', 'Sign up').click();
      cy.contains('Email is required').should('be.visible');
    });
  
    it('should display error message if password is not entered', () => {
      cy.visit('/signup');
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="confirmPassword"]').type('password123');
      cy.contains('button', 'Sign up').click();
      cy.contains('Password is required').should('be.visible');
    });
  
    it('should display error message if password and confirm password do not match', () => {
      cy.visit('/signup');
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('input[name="confirmPassword"]').type('password456');
      cy.contains('button', 'Sign up').click();
      cy.contains('Passwords do not match').should('be.visible');
    });
  
    it('should allow the user to sign up', () => {
      cy.visit('/signup');
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('input[name="confirmPassword"]').type('password123');
      cy.contains('button', 'Sign up').click();
      cy.contains('Account created successfully').should('be.visible');
    });
  
    it('should allow the user to log in', () => {
      cy.visit('/login');
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="password"]').type('password123');
      cy.contains('button', 'Log in').click();
      cy.url().should('include', '/dashboard');
    });
  
    it('should display error message if email and/or password are incorrect', () => {
      cy.visit('/login');
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="password"]').type('wrongpassword');
      cy.contains('button', 'Log in').click();
      cy.contains('Invalid email or password').should('be.visible');
    });
  
    it('should allow the user to log out', () => {
      cy.visit('/dashboard');
      cy.contains('button', 'Log out').click();
      cy.url().should('include', '/login');
    });
  });
  