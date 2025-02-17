'use client';

import { 
    Group, 
    Container, 
    Button,
    ActionIcon,
    Menu 
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import { ChefHat, Settings, HelpCircle } from 'lucide-react';
  import styles from './MainContainer.module.css'
  

  export default function MainContainer() {
      // Initialize with a safe default value
      const [opened, { toggle }] = useDisclosure(false);
      
      return (
        <Container size="lg" mt="md">
          <Group justify="space-between" align="center">
            {/* Logo Section - Simplified */}
            <div className={styles.animatedIcon}>
              <ChefHat size={32} color="#D35400" />
            </div>
  
            {/* Navigation - Simplified */}
            <Group gap="sm">
              <Menu 
                opened={opened} 
                onChange={toggle}
                position="bottom-end"
              >
                <Menu.Target>
                  <ActionIcon 
                    variant="light" 
                    size="lg"
                    color="#D35400"
                  >
                    <Settings size={20} />
                  </ActionIcon>
                </Menu.Target>
  
                <Menu.Dropdown>
                  <Menu.Label>Quiz Options</Menu.Label>
                  <Menu.Item>Difficulty Level</Menu.Item>
                  <Menu.Item>Time Limits</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            <div className={styles.animatedIcon}>
            <Button 
                variant="filled" 
                color="#D35400"
                leftSection={<HelpCircle size={16} />}
              >
                How to Play
              </Button>
            </div>
            </Group>
          </Group>
        </Container>
      );
  }