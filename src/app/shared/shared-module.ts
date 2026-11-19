import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Alert } from './components/alert/alert';
import { AlertContainer } from './components/alert/alert-container';
import { Badge } from './components/badge/badge';
import { Button } from './components/button/button';
import { Divider } from './components/divider/divider';
import { Loader } from './components/loader/loader';
import { Modal } from './components/modal/modal';
import { Select } from './components/select/select';
import { Skeleton } from './components/skeleton/skeleton';
import { TabPanelDirective } from './components/tab/directives/tab-panel.directive';
import { Tab } from './components/tab/tab';
import { Textarea } from './components/textarea/textarea';
import { Tooltip } from './components/tooltip/tooltip';
import { Input } from './components/input/input';

const COMPONENTS = [
  Badge,
  Button,
  Loader,
  Alert,
  AlertContainer,
  Input,
  Divider,
  Modal,
  Tab,
  Tooltip,
  Select,
  Skeleton,
  Textarea,
  TabPanelDirective,
];
@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, ...COMPONENTS],
})
export class SharedModule {}
