package com.subedi.hipproj.service.mapper;

import com.subedi.hipproj.domain.*;
import com.subedi.hipproj.service.dto.TaskDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Task and its DTO TaskDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface TaskMapper extends EntityMapper <TaskDTO, Task> {
    
    @Mapping(target = "jobs", ignore = true)
    Task toEntity(TaskDTO taskDTO); 
    default Task fromId(Long id) {
        if (id == null) {
            return null;
        }
        Task task = new Task();
        task.setId(id);
        return task;
    }
}
