'use client';

import { 
    Title, 
    Group, 
    Container, 
    Button,
    ActionIcon,
    Menu 
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import { ChefHat, Settings, HelpCircle } from 'lucide-react';
  
  export default function MainContainer() {
      // Initialize with a safe default value
      const [opened, { toggle }] = useDisclosure(false);
      
      return (
        <Container size="lg" mt="md">
          <Group justify="space-between" align="center">
            {/* Logo Section - Simplified */}
            <Group>
              <ChefHat size={32} color="red" />
            </Group>
  
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
                    color="red"
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
  
              <Button 
                variant="filled" 
                color="red"
                leftSection={<HelpCircle size={16} />}
              >
                How to Play
              </Button>
            </Group>
          </Group>
        </Container>
      );
  }